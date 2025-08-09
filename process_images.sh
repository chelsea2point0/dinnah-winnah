#!/bin/bash

# This script downloads and resizes images for the Dinnah Winnah app.

mkdir -p assets/images

# Array of image URLs and names
declare -a meals=(
"Marry Me Chicken Gnocchi|https://dishedbykate.com/wp-content/uploads/2023/08/Creamy-chicken-gnocchi.jpg"
"Chicken drumsticks|https://healthyrecipesblogs.com/wp-content/uploads/2023/08/baked-chicken-drumsticks-2-2023.jpg"
"BBQ chicken sandwiches|https://www.ambitiouskitchen.com/wp-content/uploads/2019/06/Incredible-Slow-Cooker-Pulled-Chicken-Sandwiches-3-1064x1064.jpg"
"Big Mac tacos|https://gypsyplate.com/wp-content/uploads/2023/08/smash-tacos_11.jpg"
"Black bean burgers|https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg"
"Blackstone fried rice|https://theprimitivedish.com/wp-content/uploads/2022/01/Blackstone-Chicken-Fried-Rice-3.jpg"
"Broccoli-Spinach Orzo with Baked Garlic Salmon|https://www.provecho.bio/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd27yihoo%2Fimage%2Fupload%2Fv1723747497%2Fr76ydv8n4r09df6wbzgw.webp&w=1200&q=75"
"Caesar salad with grilled chicken|https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1456,h_1092/k%2FPhoto%2FRecipes%2F2024-04-chicken-caesar-salad%2Fchicken-caesar-salad-653"
"Carrot Casserole|https://numstheword.com/wp-content/uploads/2018/03/Carrot-Casserole-20.jpg.webp"
"Charred corn and chickpea salad|https://d2rluq6rcpndy0.cloudfront.net/img/charred-corn-salad.jpeg"
"Cheeseburger sliders|https://hips.hearstapps.com/hmg-prod/images/cheeseburger-sliders-recipe-679022d8826b8.jpeg?crop=0.9981290926099158xw:1xh;center,top&resize=1200:*"
"Chicken a la King|https://thecozycook.com/wp-content/uploads/2023/09/Chicken-a-la-King-1.jpg"
"Chicken and gnocchi soup|https://dishingouthealth.com/wp-content/uploads/2024/10/ChickenGnocchiSoup_Styled4.jpg"
"Chicken broccoli Alfredo with penne|https://www.mindyscookingobsession.com/wp-content/uploads/2020/02/2-Alfredo-Chicken-Broccoli-Pasta.jpg"
"Chicken fajitas|https://tastesbetterfromscratch.com/wp-content/uploads/2017/09/Sheet-Pan-Chicken-Fajitas-3-1.jpg"
"Chicken Gyros|https://i0.wp.com/frugalhausfrau.com/wp-content/uploads/2024/08/Loaf-Pan-Chicken-Gyros-8.jpg?w=1200&ssl=1"
"Chicken noodle soup|https://tastesbetterfromscratch.com/wp-content/uploads/2017/10/Chicken-Noodle-Soup-2-1024x1536.jpg"
"Chicken Parmesan|https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg"
"Chicken pot pie|https://tastesbetterfromscratch.com/wp-content/uploads/2022/10/Chicken-Pot-Pie24-1.jpg"
"Chicken schnitzel with Parmesan risotto|https://www.onceuponachef.com/images/2023/10/Schnitzel-Hero-1.jpg"
"Chicken Stir Fry|https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg"
"Chickpea Buffalo cheese dip|https://iheartvegetables.com/wp-content/uploads/2021/09/Buffalo-Chickpea-Dip-5-of-5.jpg"
"Chili|https://www.chilipeppermadness.com/wp-content/uploads/2023/01/Classic-Chili-SQ1.jpg"
"Cobb Salad|https://www.allrecipes.com/thmb/lUCXnzWTl9WOQ9NRAT08hA4O2lE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14415-cobb-salad-DDMFS-4x3-608ba9c5768b49079eb75fe9a9898307.jpg"
"Creamy chicken gnocchi soup|https://www.simplyhappyfoodie.com/wp-content/uploads/2017/11/Instant-pot-creamy-chicken-gnocchi-soup-5.jpg"
"Eggplant Parmesan Meatballs|https://dishingouthealth.com/wp-content/uploads/2020/11/EggplantParmMeatballs_Styled.jpg"
"Fiesta Avocado Corn Salad|https://dishingouthealth.com/wp-content/uploads/2021/06/AvocadoCornSalad_Styled1.jpg"
"Fish sandwiches|https://www.billyparisi.com/wp-content/uploads/2024/02/fish-sandwich-process-15.jpg"
"Fish tacos|https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4.jpg"
"Greek chicken and quinoa/rice bowls|https://www.thechunkychef.com/wp-content/uploads/2017/07/Greek-Chicken-Rice-Bowl-8-1365x2048.jpg"
"Greek chicken meatballs with lemon orzo|https://i0.wp.com/braesbites.com/wp-content/uploads/2021/06/IMG_1054.jpg?w=2048&ssl=1"
"Greek Layer Dip|https://www.thecountrycook.net/wp-content/uploads/2016/04/1st-image-Greek-Layer-Dip-2.jpg"
"Grilled cheese and tomato soup|https://www.erinliveswhole.com/wp-content/uploads/2022/10/TomatoSoupandgrilledcheese-14.jpg"
"Grilled chicken sandwiches|https://jamjarkitchen.com/wp-content/uploads/2021/06/DSC_0076.jpg"
"Grilled chicken street tacos|https://tastesbetterfromscratch.com/wp-content/uploads/2023/05/Grilled-Chicken-Street-Tacos-1.jpg"
"Ground Turkey tacos|https://www.skinnytaste.com/wp-content/uploads/2024/04/Ground-Turkey-Tacos-20.jpg"
"Hibachi chicken and veggies|https://gypsyplate.com/wp-content/uploads/2023/04/hibachi-chicken_08.jpg"
"Home made pizzas|https://fitfoodiefinds.com/wp-content/uploads/2025/02/No-Rise-Pizza-Dough-01-768x768.jpg"
"Homemade chicken nuggets|https://thecozycook.com/wp-content/uploads/2020/11/Homemade-Chicken-Nuggets.jpg"
"Honey Cornbread|https://www.eatingonadime.com/wp-content/uploads/2021/09/honey-cornbread-4-1.jpg"
"Indian simmer sauce with chicken and veggies|https://www.allrecipes.com/thmb/JxQ8VdSYqO6dzQCRtujN7m6REjs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-228293-curry-stand-chicken-tikka-masala-sauce-DDMFS-4x3-4917c70633354b8784b14bae8c3a22a5.jpg"
"Instant pot chicken and veggie risotto|https://www.happyfoodstube.com/wp-content/uploads/2018/08/instant-pot-chicken-risotto-picture.jpg"
"Italian Penicillin Soup|https://thecafesucrefarine.com/wp-content/uploads/2024/01/Italian-Pastina-Soup-13-500x500.jpg"
"Lemony Chicken Thighs with Orzo|https://erinobrien.life/wp-content/uploads/2024/11/Lemons-Story-Frame-2.jpg"
"Minestrone soup|https://pipingpotcurry.com/wp-content/uploads/2017/10/Instant-Pot-Vegetable-Minestrone-Soup-Piping-Pot-Curry.jpg"
"Pesto chicken and pasta|https://www.allrecipes.com/thmb/Xn7dh7rTfc_JZA1wGSJ2eB_dFso=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-46982-pesto-pasta-with-chicken-DDMFS-4x3-5e043df9d5174cf4ac53612ee0f5b56e.jpg"
"Potato Leek Soup|https://www.onceuponachef.com/images/2011/11/potato-leek-soup-14-1700x1238.jpg"
"Quinoa salad|https://theeastcoastkitchen.com/nitropack_static/JVwXKMegmYUHkLLRqdRKKXZNEMXPKMRc/assets/images/optimized/rev-f060b9e/theeastcoastkitchen.com/wp-content/uploads/2023/02/The-Jennifer-Aniston-SaladNEW-06-min-scaled-1-2048x1366.jpg"
"Ritz Cracker Haddock|https://www.simplyrecipes.com/thmb/hA1C2z5dd4I2D0OkIn1iOh_Puuk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__08__baked-cod-ritz-cracker-horiz-a-1800-9a44e8c43bd444188cce81b07e44f3db.jpg"
"Roasted tomato pesto cottage cheese toast|https://www.nourishandtempt.com/wp-content/uploads/2025/02/80A72F9A-574D-477A-99A7-982E3EB25347.jpg"
"Rotisserie chicken Thanksgiving|https://www.culinaryhill.com/wp-content/uploads/2021/02/How-to-Make-Rotisserie-Chicken-Culinary-Hill-HR-04.jpg"
"Salmon hibachi|https://weekdaypescatarian.com/wp-content/uploads/2023/12/IMG_9738.jpg"
"Sloppy Joe sweet potato boats|https://www.skinnytaste.com/wp-content/uploads/2017/01/Sloppy-Joe-Sweet-Potatoes-1-2.jpg"
"Slow Cooker Marry Me Chickpea Soup|https://www.liveeatlearn.com/wp-content/uploads/2024/08/marry-me-soup-11.jpg"
"Smothered Turkey Meatballs|https://static.wixstatic.com/media/4f7a18_f0d39b38777a42ba99a1b58679140342~mv2.jpg/v1/fill/w_682"
"Southwest salad with grilled chicken|https://hannahmageerd.com/wp-content/uploads/2024/03/southwest-chicknen-salad-5.jpg"
"Spaghetti and meatballs|https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg"
"Spiced Salmon with rice and green beans|https://dishingouthealth.com/wp-content/uploads/2025/03/SumacSalmon_Styled3.jpg"
"Steak and cheese subs|https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2020/01/Philly-Cheesesteak-Recipe-1200-18.jpg"
"Steak and mashed potatoes|https://rachaelsgoodeats.com/wp-content/uploads/2023/06/IMG_3163-819x1024.jpg"
"Stuffed Sweet Potatoes|https://plantbasedonabudget.com/wp-content/uploads/2023/09/Southwest-Stuffed-Sweet-Potatoes-Plant-Based-on-a-Budget-5.jpg"
"Swedish meatballs|https://tastesbetterfromscratch.com/wp-content/uploads/2019/03/Swedish-Meatballs-Web-14.jpeg"
"Sweet potato and black bean skillet|https://reciperunner.com/wp-content/uploads/2021/11/southwest-sweet-potato-black-bean-rice-skillet-photos-768x1125.jpg"
"Tofu stir fry|https://minimalistbaker.com/wp-content/uploads/2013/10/How-to-Cook-Tofu-minimalistbaker.com_.jpg"
"Turkey meatloaf|https://www.inspiredtaste.net/wp-content/uploads/2016/06/Turkey-Meatloaf-Recipe-1200.jpg"
"Turkey sloppy joes|https://www.ambitiouskitchen.com/wp-content/uploads/2017/06/Monique-Turkey-Sloppy-Joes-750x750.jpg"
"Vegan sausage and potato soup|https://www.rabbitandwolves.com/wp-content/uploads/2020/09/DSC_0732.jpg"
"Vegetable lasagna|https://cookieandkate.com/images/2017/12/best-vegetable-lasagna-recipe-3.jpg"
"White chicken chili|https://www.cookingclassy.com/wp-content/uploads/2018/12/white-chicken-chili-4.jpg"
"Zucchini Chicken Enchilada Skillet|https://www.joyfulhealthyeats.com/wp-content/uploads/2019/08/30-Minute-Skillet-Zucchini-Chicken-Enchiladas-web-5.jpg"
"Shepherd's Pie|https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/28/0/FNK_BEEF-SHEPHERDS-PIE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1580240308098.webp"
"Chicken Broccoli Rice Casserole|https://thecozycook.com/wp-content/uploads/2019/03/Broccoli-Cheddar-Chicken-Rice-Casserole-Recipe-.jpg"
)

for item in "${meals[@]}"; do
  IFS='|' read -r name url <<< "$item"

  # Sanitize the name to create a valid filename
  filename=$(echo "$name" | sed 's/[^a-zA-Z0-9]/-/g' | tr '[:upper:]' '[:lower:]')

  # Get the file extension
  extension="${url##*.}"
  if [[ "$extension" != "jpg" && "$extension" != "jpeg" && "$extension" != "png" && "$extension" != "webp" ]]; then
    extension="jpg"
  fi

  filepath="assets/images/${filename}.${extension}"

  echo "Processing $name..."
  echo "URL: $url"
  echo "Filepath: $filepath"

  # Download the image
  curl -L -o "temp_image" "$url"

  # Check if download was successful
  if [ $? -eq 0 ]; then
    # Resize the image
    convert "temp_image" -resize "354x300^" -gravity center -extent 354x300 "$filepath"

    # Check if resize was successful
    if [ $? -eq 0 ]; then
      echo "Successfully processed $name"
    else
      echo "Failed to resize $name"
    fi
    rm "temp_image"
  else
    echo "Failed to download $name"
  fi

  echo "-------------------"
done

echo "Image processing complete."

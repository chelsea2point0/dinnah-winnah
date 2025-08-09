const numberOfMeals = 5;

const meals = [
        {
          "Name": "Marry Me Chicken Gnocchi",
          "Recipe": "https://dishedbykate.com/one-pan-creamy-chicken-gnocchi/",
          "Image": "https://dishedbykate.com/wp-content/uploads/2023/08/Creamy-chicken-gnocchi.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken drumsticks",
          "Recipe": "https://healthyrecipesblogs.com/baked-drumsticks/",
          "Image": "https://healthyrecipesblogs.com/wp-content/uploads/2023/08/baked-chicken-drumsticks-2-2023.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "BBQ chicken sandwiches ",
          "Recipe": "https://www.ambitiouskitchen.com/slow-cooker-pulled-chicken-sandwiches/",
          "Image": "https://www.ambitiouskitchen.com/wp-content/uploads/2019/06/Incredible-Slow-Cooker-Pulled-Chicken-Sandwiches-3-1064x1064.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Big Mac tacos",
          "Recipe": "https://gypsyplate.com/smash-tacos/",
          "Image": "https://gypsyplate.com/wp-content/uploads/2023/08/smash-tacos_11.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Black bean burgers",
          "Recipe": "https://sallysbakingaddiction.com/best-black-bean-burgers/",
          "Image": "https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Blackstone fried rice",
          "Recipe": "https://theprimitivedish.com/blackstone-fried-rice/",
          "Image": "https://theprimitivedish.com/wp-content/uploads/2022/01/Blackstone-Chicken-Fried-Rice-3.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Broccoli-Spinach Orzo with Baked Garlic Salmon",
          "Recipe": "https://www.provecho.bio/@breadbakebeyond/broccoli-spinach-orzo-with-baked-garlic-salmon",
          "Image": "https://www.provecho.bio/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd27yihoo%2Fimage%2Fupload%2Fv1723747497%2Fr76ydv8n4r09df6wbzgw.webp&w=1200&q=75",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Caesar salad with grilled chicken",
          "Recipe": "https://www.thekitchn.com/chicken-caesar-salad-recipe-23659660",
          "Image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1456,h_1092/k%2FPhoto%2FRecipes%2F2024-04-chicken-caesar-salad%2Fchicken-caesar-salad-653",
          "Type": "Lunch",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Carrot Casserole",
          "Recipe": "https://numstheword.com/cheesy-carrot-casserole/",
          "Image": "https://numstheword.com/wp-content/uploads/2018/03/Carrot-Casserole-20.jpg.webp",
          "Type": "Side Dish",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Charred corn and chickpea salad",
          "Recipe": "https://carolefood.com/recipe/charred-corn-salad",
          "Image": "https://d2rluq6rcpndy0.cloudfront.net/img/charred-corn-salad.jpeg",
          "Type": "Lunch",
          "Categories": " Dinner",
          "Comments\r": " Side Dish\""
        },
        {
          "Name": "Cheeseburger sliders",
          "Recipe": "https://www.thepioneerwoman.com/food-cooking/recipes/a35930925/cheeseburger-sliders/",
          "Image": "https://hips.hearstapps.com/hmg-prod/images/cheeseburger-sliders-recipe-679022d8826b8.jpeg?crop=0.9981290926099158xw:1xh;center,top&resize=1200:*",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken a la King",
          "Recipe": "https://thecozycook.com/chicken-a-la-king/",
          "Image": "https://thecozycook.com/wp-content/uploads/2023/09/Chicken-a-la-King-1.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken and gnocchi soup",
          "Recipe": "https://dishingouthealth.com/chicken-gnocchi-soup/",
          "Image": "https://dishingouthealth.com/wp-content/uploads/2024/10/ChickenGnocchiSoup_Styled4.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken broccoli Alfredo with penne",
          "Recipe": "https://www.mindyscookingobsession.com/alfredo-chicken-pasta-broccoli/",
          "Image": "https://www.mindyscookingobsession.com/wp-content/uploads/2020/02/2-Alfredo-Chicken-Broccoli-Pasta.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken fajitas",
          "Recipe": "https://tastesbetterfromscratch.com/sheet-pan-chicken-fajitas/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2017/09/Sheet-Pan-Chicken-Fajitas-3-1.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Gyros",
          "Recipe": "https://frugalhausfrau.com/2024/08/09/loaf-pan-chicken-gyros/",
          "Image": "https://i0.wp.com/frugalhausfrau.com/wp-content/uploads/2024/08/Loaf-Pan-Chicken-Gyros-8.jpg?w=1200&ssl=1",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken noodle soup",
          "Recipe": "https://tastesbetterfromscratch.com/chicken-noodle-soup/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2017/10/Chicken-Noodle-Soup-2-1024x1536.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Kid-friendly"
        },
        {
          "Name": "Chicken Parmesan ",
          "Recipe": "https://tastesbetterfromscratch.com/simple-chicken-parmesan/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken pot pie",
          "Recipe": "https://tastesbetterfromscratch.com/chicken-pot-pie/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2022/10/Chicken-Pot-Pie24-1.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken schnitzel with Parmesan risotto ",
          "Recipe": "https://www.onceuponachef.com/recipes/chicken-schnitzel.html",
          "Image": "https://www.onceuponachef.com/images/2023/10/Schnitzel-Hero-1.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Stir Fry",
          "Recipe": "https://www.momontimeout.com/easy-chicken-stir-fry-recipe/",
          "Image": "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chickpea Buffalo cheese dip",
          "Recipe": "https://iheartvegetables.com/vegetarian-buffalo-dip/#tasty-recipes-30803",
          "Image": "https://iheartvegetables.com/wp-content/uploads/2021/09/Buffalo-Chickpea-Dip-5-of-5.jpg",
          "Type": "Appetizer",
          "Categories": "\"Vegetarian",
          "Comments\r": " Quick (30m or less)\""
        },
        {
          "Name": "Chili",
          "Recipe": "https://www.recipething.com/recipes/show/11418-the-day-before-chili",
          "Image": "https://www.chilipeppermadness.com/wp-content/uploads/2023/01/Classic-Chili-SQ1.jpg",
          "Type": "Dinner",
          "Categories": "Spicy",
          "Comments\r": "\r"
        },
        {
          "Name": "Cobb Salad",
          "Recipe": "https://cooking.nytimes.com/recipes/1018890-cobb-salad",
          "Image": "https://www.allrecipes.com/thmb/lUCXnzWTl9WOQ9NRAT08hA4O2lE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14415-cobb-salad-DDMFS-4x3-608ba9c5768b49079eb75fe9a9898307.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Creamy chicken gnocchi soup",
          "Recipe": "https://www.simplyhappyfoodie.com/instant-pot-creamy-chicken-gnocchi-soup/",
          "Image": "https://www.simplyhappyfoodie.com/wp-content/uploads/2017/11/Instant-pot-creamy-chicken-gnocchi-soup-5.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Eggplant Parmesan Meatballs",
          "Recipe": "https://dishingouthealth.com/eggplant-parmesan-meatballs/",
          "Image": "https://dishingouthealth.com/wp-content/uploads/2020/11/EggplantParmMeatballs_Styled.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Fiesta Avocado Corn Salad",
          "Recipe": "https://dishingouthealth.com/avocado-corn-salad/#wprm-recipe-container-19225",
          "Image": "https://dishingouthealth.com/wp-content/uploads/2021/06/AvocadoCornSalad_Styled1.jpg",
          "Type": "Lunch",
          "Categories": " Side Dish\"",
          "Comments\r": "\"Vegetarian"
        },
        {
          "Name": "Fish sandwiches",
          "Recipe": "https://www.billyparisi.com/fish-sandwich/#recipe",
          "Image": "https://www.billyparisi.com/wp-content/uploads/2024/02/fish-sandwich-process-15.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Fish tacos",
          "Recipe": "https://natashaskitchen.com/fish-tacos-recipe/",
          "Image": "https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek chicken and quinoa/rice bowls",
          "Recipe": "https://www.thechunkychef.com/20-minute-greek-chicken-rice-bowl/",
          "Image": "https://www.thechunkychef.com/wp-content/uploads/2017/07/Greek-Chicken-Rice-Bowl-8-1365x2048.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek chicken meatballs with lemon orzo",
          "Recipe": "https://braesbites.com/easy-greek-chicken-meatballs-with-lemon-orzo/",
          "Image": "https://i0.wp.com/braesbites.com/wp-content/uploads/2021/06/IMG_1054.jpg?w=2048&ssl=1",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek Layer Dip",
          "Recipe": "https://www.thecountrycook.net/greek-layer-dip/",
          "Image": "https://www.thecountrycook.net/wp-content/uploads/2016/04/1st-image-Greek-Layer-Dip-2.jpg",
          "Type": "Appetizer",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Quick (30m or less)"
        },
        {
          "Name": "Grilled cheese and tomato soup ",
          "Recipe": "https://www.erinliveswhole.com/easy-creamy-tomato-soup-with-grilled-cheese/",
          "Image": "https://www.erinliveswhole.com/wp-content/uploads/2022/10/TomatoSoupandgrilledcheese-14.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Vegetarian"
        },
        {
          "Name": "Grilled chicken sandwiches",
          "Recipe": "https://jamjarkitchen.com/2021/06/28/grilled-chicken-sandwich/",
          "Image": "https://jamjarkitchen.com/wp-content/uploads/2021/06/DSC_0076.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Grilled chicken street tacos",
          "Recipe": "https://tastesbetterfromscratch.com/grilled-chicken-street-tacos/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2023/05/Grilled-Chicken-Street-Tacos-1.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Ground Turkey tacos",
          "Recipe": "https://www.skinnytaste.com/ground-turkey-tacos/",
          "Image": "https://www.skinnytaste.com/wp-content/uploads/2024/04/Ground-Turkey-Tacos-20.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Hibachi chicken and veggies",
          "Recipe": "https://gypsyplate.com/hibachi-chicken/",
          "Image": "https://gypsyplate.com/wp-content/uploads/2023/04/hibachi-chicken_08.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Home made pizzas",
          "Recipe": "https://fitfoodiefinds.com/no-rise-pizza-dough/#wprm-recipe-container-252456",
          "Image": "https://fitfoodiefinds.com/wp-content/uploads/2025/02/No-Rise-Pizza-Dough-01-768x768.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Kid-friendly"
        },
        {
          "Name": "Homemade chicken nuggets",
          "Recipe": "https://thecozycook.com/homemade-chicken-nuggets/",
          "Image": "https://thecozycook.com/wp-content/uploads/2020/11/Homemade-Chicken-Nuggets.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Honey Cornbread ",
          "Recipe": "https://www.eatingonadime.com/sweet-honey-corn-bread-recipe/#wprm-recipe-container-17236",
          "Image": "https://www.eatingonadime.com/wp-content/uploads/2021/09/honey-cornbread-4-1.jpg",
          "Type": "Side Dish",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Vegetarian\""
        },
        {
          "Name": "Indian simmer sauce with chicken and veggies",
          "Recipe": "https://www.allrecipes.com/recipe/228293/curry-stand-chicken-tikka-masala-sauce/",
          "Image": "https://www.allrecipes.com/thmb/JxQ8VdSYqO6dzQCRtujN7m6REjs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-228293-curry-stand-chicken-tikka-masala-sauce-DDMFS-4x3-4917c70633354b8784b14bae8c3a22a5.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Instant pot chicken and veggie risotto",
          "Recipe": "https://www.happyfoodstube.com/instant-pot-chicken-risotto/",
          "Image": "https://www.happyfoodstube.com/wp-content/uploads/2018/08/instant-pot-chicken-risotto-picture.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Italian Penicillin Soup",
          "Recipe": "https://thecafesucrefarine.com/italian-chicken-pastina-soup-aka-italian-nonnas-penicilin-soup/#wprm-recipe-container-77093",
          "Image": "https://thecafesucrefarine.com/wp-content/uploads/2024/01/Italian-Pastina-Soup-13-500x500.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Lemony Chicken Thighs with Orzo",
          "Recipe": "https://erinobrien.life/lemony-one-pan-chicken-and-orzo-with-feta/",
          "Image": "https://erinobrien.life/wp-content/uploads/2024/11/Lemons-Story-Frame-2.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Mexican lasagna",
          "Recipe": "https://www.thekitchn.com/mexican-lasagna-recipe-23705113",
          "Image": "https://cdn.apartmenttherapy.info/image/upload/f_auto",
          "Type": "q_auto:eco",
          "Categories": "",
          "Comments\r": "w_730"
        },
        {
          "Name": "Minestrone soup",
          "Recipe": "https://pipingpotcurry.com/minestrone-soup-instantpot/",
          "Image": "https://pipingpotcurry.com/wp-content/uploads/2017/10/Instant-Pot-Vegetable-Minestrone-Soup-Piping-Pot-Curry.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Pesto chicken and pasta",
          "Recipe": "https://www.allrecipes.com/recipe/46982/pesto-pasta-with-chicken/",
          "Image": "https://www.allrecipes.com/thmb/Xn7dh7rTfc_JZA1wGSJ2eB_dFso=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-46982-pesto-pasta-with-chicken-DDMFS-4x3-5e043df9d5174cf4ac53612ee0f5b56e.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Potato Leek Soup",
          "Recipe": "https://www.onceuponachef.com/recipes/potato-leek-soup.html",
          "Image": "https://www.onceuponachef.com/images/2011/11/potato-leek-soup-14-1700x1238.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Quinoa salad",
          "Recipe": "https://theeastcoastkitchen.com/the-jennifer-aniston-salad/",
          "Image": "https://theeastcoastkitchen.com/nitropack_static/JVwXKMegmYUHkLLRqdRKKXZNEMXPKMRc/assets/images/optimized/rev-f060b9e/theeastcoastkitchen.com/wp-content/uploads/2023/02/The-Jennifer-Aniston-SaladNEW-06-min-scaled-1-2048x1366.jpg",
          "Type": "Lunch",
          "Categories": " Side Dish\"",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Ritz Cracker Haddock",
          "Recipe": "https://www.simplyrecipes.com/recipes/baked_cod_with_ritz_cracker_topping/",
          "Image": "https://www.simplyrecipes.com/thmb/hA1C2z5dd4I2D0OkIn1iOh_Puuk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__08__baked-cod-ritz-cracker-horiz-a-1800-9a44e8c43bd444188cce81b07e44f3db.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Roasted tomato pesto cottage cheese toast",
          "Recipe": "https://www.nourishandtempt.com/pesto-and-tomato-cottage-cheese-toast/",
          "Image": "https://www.nourishandtempt.com/wp-content/uploads/2025/02/80A72F9A-574D-477A-99A7-982E3EB25347.jpg",
          "Type": "",
          "Categories": "Lunch",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Rotisserie chicken Thanksgiving",
          "Recipe": "https://www.culinaryhill.com/rotisserie-style-chicken/",
          "Image": "https://www.culinaryhill.com/wp-content/uploads/2021/02/How-to-Make-Rotisserie-Chicken-Culinary-Hill-HR-04.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "Dinner"
        },
        {
          "Name": "Salmon hibachi ",
          "Recipe": "https://weekdaypescatarian.com/hibachi-salmon-recipe/",
          "Image": "https://weekdaypescatarian.com/wp-content/uploads/2023/12/IMG_9738.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Sloppy Joe sweet potato boats",
          "Recipe": "https://www.skinnytaste.com/sloppy-joe-baked-sweet-potatoes/",
          "Image": "https://www.skinnytaste.com/wp-content/uploads/2017/01/Sloppy-Joe-Sweet-Potatoes-1-2.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Slow Cooker Marry Me Chickpea Soup",
          "Recipe": "https://www.liveeatlearn.com/slow-cooker-marry-me-chickpea-soup/",
          "Image": "https://www.liveeatlearn.com/wp-content/uploads/2024/08/marry-me-soup-11.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Smothered Turkey Meatballs",
          "Recipe": "https://www.royaleeats.com/post/smothered-meatballs",
          "Image": "https://static.wixstatic.com/media/4f7a18_f0d39b38777a42ba99a1b58679140342~mv2.jpg/v1/fill/w_682",
          "Type": "h_1024",
          "Categories": "al_c",
          "Comments\r": "q_85"
        },
        {
          "Name": "Southwest salad with grilled chicken",
          "Recipe": "https://hannahmageerd.com/healthy-southwest-chicken-salad-with-chipotle-southwest-dressing/",
          "Image": "https://hannahmageerd.com/wp-content/uploads/2024/03/southwest-chicknen-salad-5.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Spaghetti and meatballs",
          "Recipe": "https://www.onceuponachef.com/recipes/spaghetti-and-meatballs.html",
          "Image": "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "Dinner"
        },
        {
          "Name": "Spiced Salmon with rice and green beans ",
          "Recipe": "https://dishingouthealth.com/sumac-salmon-with-golden-rice/#wprm-recipe-container-39238",
          "Image": "https://dishingouthealth.com/wp-content/uploads/2025/03/SumacSalmon_Styled3.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Steak and cheese subs",
          "Recipe": "https://www.fromvalerieskitchen.com/philly-cheesesteak-recipe-peppers-onions/",
          "Image": "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2020/01/Philly-Cheesesteak-Recipe-1200-18.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Steak and mashed potatoes",
          "Recipe": "https://rachaelsgoodeats.com/the-perfect-tri-tip-steak-with-mashed-potatoes-and-garlicky-mushrooms/",
          "Image": "https://rachaelsgoodeats.com/wp-content/uploads/2023/06/IMG_3163-819x1024.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Stuffed Sweet Potatoes",
          "Recipe": "https://plantbasedonabudget.com/southwest-stuffed-sweet-potatoes/",
          "Image": "https://plantbasedonabudget.com/wp-content/uploads/2023/09/Southwest-Stuffed-Sweet-Potatoes-Plant-Based-on-a-Budget-5.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "Can add taco-seasoned ground turkey or beef for meat eaters\r"
        },
        {
          "Name": "Swedish meatballs",
          "Recipe": "https://tastesbetterfromscratch.com/swedish-meatballs/",
          "Image": "https://tastesbetterfromscratch.com/wp-content/uploads/2019/03/Swedish-Meatballs-Web-14.jpeg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Sweet potato and black bean skillet",
          "Recipe": "https://reciperunner.com/wp-json/mv-create/v1/creations/1046/print",
          "Image": "https://reciperunner.com/wp-content/uploads/2021/11/southwest-sweet-potato-black-bean-rice-skillet-photos-768x1125.jpg",
          "Type": "Dinner",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Vegetarian\""
        },
        {
          "Name": "Tofu stir fry",
          "Recipe": "https://minimalistbaker.com/tofu-that-tastes-good-stir-fry/",
          "Image": "https://minimalistbaker.com/wp-content/uploads/2013/10/How-to-Cook-Tofu-minimalistbaker.com_.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Turkey meatloaf",
          "Recipe": "https://www.inspiredtaste.net/21535/unbelievably-moist-turkey-meatloaf-recipe/",
          "Image": "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Turkey-Meatloaf-Recipe-1200.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Turkey sloppy joes",
          "Recipe": "https://www.ambitiouskitchen.com/healthy-turkey-sloppy-joes-homemade-sauce/",
          "Image": "https://www.ambitiouskitchen.com/wp-content/uploads/2017/06/Monique-Turkey-Sloppy-Joes-750x750.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Vegan sausage and potato soup",
          "Recipe": "https://www.rabbitandwolves.com/vegan-creamy-sausage-and-potato-soup/",
          "Image": "https://www.rabbitandwolves.com/wp-content/uploads/2020/09/DSC_0732.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Vegetable lasagna",
          "Recipe": "https://cookieandkate.com/best-vegetable-lasagna-recipe/",
          "Image": "https://cookieandkate.com/images/2017/12/best-vegetable-lasagna-recipe-3.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "White chicken chili",
          "Recipe": "https://www.cookingclassy.com/white-chicken-chili/#jump-to-recipe",
          "Image": "https://www.cookingclassy.com/wp-content/uploads/2018/12/white-chicken-chili-4.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Zucchini Chicken Enchilada Skillet",
          "Recipe": "https://www.joyfulhealthyeats.com/30-minute-zucchini-chicken-enchilada-skillet/",
          "Image": "https://www.joyfulhealthyeats.com/wp-content/uploads/2019/08/30-Minute-Skillet-Zucchini-Chicken-Enchiladas-web-5.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Shepherd's Pie",
          "Recipe": "https://www.foodnetwork.com/recipes/beef-shepherds-pie-recipe-1953794",
          "Image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/28/0/FNK_BEEF-SHEPHERDS-PIE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1580240308098.webp",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Broccoli Rice Casserole",
          "Recipe": "https://thecozycook.com/broccoli-cheddar-chicken-and-rice-casserole/",
          "Image": "https://thecozycook.com/wp-content/uploads/2019/03/Broccoli-Cheddar-Chicken-Rice-Casserole-Recipe-.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        }
];

// Display full list of meals
let mealList = "";
for (let [meal, data] of Object.entries(meals)) {
    if (data.Recipe){
        mealList += `<a target="_blank" href='${data.Recipe}'>${data.Name}</a><br>`
    } else {
        mealList += `${data.Name}<br>`
    }
}

document.getElementById("meals").innerHTML = mealList;

// Get random set of 5 meals from the master list
let random = Math.random();

let randomMeals = meals
  .sort(() => {
    return random = 0.5;
  })
  .slice(0, numberOfMeals);


// Regenerate a new random set of 5 meals on button click
const button = document.getElementById('plan-btn');
    button.addEventListener('click', function() {
        getMealPlan();
    });

function getMealPlan() {
  let shuffled = meals.sort(() => Math.random() - 0.5);
  let randomMeals = shuffled.slice(0, numberOfMeals);

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


  const allCardsHTML = randomMeals.map((recipe, index) => {
    // Build cards based on selected meals
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-header bg-success text-white">
                  ${weekdays[index]}
                </div>
                <img src="${recipe.Image}" class="card-img-top" alt="${recipe.Name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${recipe.Name}</h5>
                    <a href="${recipe.Recipe}" class="btn btn-warning mt-auto" target="_blank" rel="noopener noreferrer">View Recipe</a>
                </div>
            </div>
        </div>
    `;
    }).join(''); 

    document.getElementById("recipe-cards-container").innerHTML = allCardsHTML;

}
 

// Initiate first set of meals on page load
(function() {
  getMealPlan();
})();

    
      
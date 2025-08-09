const numberOfMeals = 5;

const meals = [
        {
          "Name": "Marry Me Chicken Gnocchi",
          "Recipe": "https://dishedbykate.com/one-pan-creamy-chicken-gnocchi/",
          "Image": "assets/images/marry-me-chicken-gnocchi.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken drumsticks",
          "Recipe": "https://healthyrecipesblogs.com/baked-drumsticks/",
          "Image": "assets/images/chicken-drumsticks.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "BBQ chicken sandwiches ",
          "Recipe": "https://www.ambitiouskitchen.com/slow-cooker-pulled-chicken-sandwiches/",
          "Image": "assets/images/bbq-chicken-sandwiches.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Big Mac tacos",
          "Recipe": "https://gypsyplate.com/smash-tacos/",
          "Image": "assets/images/big-mac-tacos.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Black bean burgers",
          "Recipe": "https://sallysbakingaddiction.com/best-black-bean-burgers/",
          "Image": "assets/images/black-bean-burgers.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Blackstone fried rice",
          "Recipe": "https://theprimitivedish.com/blackstone-fried-rice/",
          "Image": "assets/images/blackstone-fried-rice.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Broccoli-Spinach Orzo with Baked Garlic Salmon",
          "Recipe": "https://www.provecho.bio/@breadbakebeyond/broccoli-spinach-orzo-with-baked-garlic-salmon",
          "Image": "assets/images/broccoli-spinach-orzo-with-baked-garlic-salmon.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Caesar salad with grilled chicken",
          "Recipe": "https://www.thekitchn.com/chicken-caesar-salad-recipe-23659660",
          "Image": "assets/images/caesar-salad-with-grilled-chicken.jpg",
          "Type": "Lunch",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Carrot Casserole",
          "Recipe": "https://numstheword.com/cheesy-carrot-casserole/",
          "Image": "assets/images/carrot-casserole.webp",
          "Type": "Side Dish",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Charred corn and chickpea salad",
          "Recipe": "https://carolefood.com/recipe/charred-corn-salad",
          "Image": "assets/images/charred-corn-and-chickpea-salad.jpeg",
          "Type": "Lunch",
          "Categories": " Dinner",
          "Comments\r": " Side Dish\""
        },
        {
          "Name": "Cheeseburger sliders",
          "Recipe": "https://www.thepioneerwoman.com/food-cooking/recipes/a35930925/cheeseburger-sliders/",
          "Image": "assets/images/cheeseburger-sliders.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken a la King",
          "Recipe": "https://thecozycook.com/chicken-a-la-king/",
          "Image": "assets/images/chicken-a-la-king.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken and gnocchi soup",
          "Recipe": "https://dishingouthealth.com/chicken-gnocchi-soup/",
          "Image": "assets/images/chicken-and-gnocchi-soup.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken broccoli Alfredo with penne",
          "Recipe": "https://www.mindyscookingobsession.com/alfredo-chicken-pasta-broccoli/",
          "Image": "assets/images/chicken-broccoli-alfredo-with-penne.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken fajitas",
          "Recipe": "https://tastesbetterfromscratch.com/sheet-pan-chicken-fajitas/",
          "Image": "assets/images/chicken-fajitas.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Gyros",
          "Recipe": "https://frugalhausfrau.com/2024/08/09/loaf-pan-chicken-gyros/",
          "Image": "assets/images/chicken-gyros.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken noodle soup",
          "Recipe": "https://tastesbetterfromscratch.com/chicken-noodle-soup/",
          "Image": "assets/images/chicken-noodle-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Kid-friendly"
        },
        {
          "Name": "Chicken Parmesan ",
          "Recipe": "https://tastesbetterfromscratch.com/simple-chicken-parmesan/",
          "Image": "assets/images/chicken-parmesan-.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken pot pie",
          "Recipe": "https://tastesbetterfromscratch.com/chicken-pot-pie/",
          "Image": "assets/images/chicken-pot-pie.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken schnitzel with Parmesan risotto ",
          "Recipe": "https://www.onceuponachef.com/recipes/chicken-schnitzel.html",
          "Image": "assets/images/chicken-schnitzel-with-parmesan-risotto-.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Stir Fry",
          "Recipe": "https://www.momontimeout.com/easy-chicken-stir-fry-recipe/",
          "Image": "assets/images/chicken-stir-fry.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chickpea Buffalo cheese dip",
          "Recipe": "https://iheartvegetables.com/vegetarian-buffalo-dip/#tasty-recipes-30803",
          "Image": "assets/images/chickpea-buffalo-cheese-dip.jpg",
          "Type": "Appetizer",
          "Categories": "\"Vegetarian",
          "Comments\r": " Quick (30m or less)\""
        },
        {
          "Name": "Chili",
          "Recipe": "https://www.recipething.com/recipes/show/11418-the-day-before-chili",
          "Image": "assets/images/chili.jpg",
          "Type": "Dinner",
          "Categories": "Spicy",
          "Comments\r": "\r"
        },
        {
          "Name": "Cobb Salad",
          "Recipe": "https://cooking.nytimes.com/recipes/1018890-cobb-salad",
          "Image": "assets/images/cobb-salad.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Creamy chicken gnocchi soup",
          "Recipe": "https://www.simplyhappyfoodie.com/instant-pot-creamy-chicken-gnocchi-soup/",
          "Image": "assets/images/creamy-chicken-gnocchi-soup.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Eggplant Parmesan Meatballs",
          "Recipe": "https://dishingouthealth.com/eggplant-parmesan-meatballs/",
          "Image": "assets/images/eggplant-parmesan-meatballs.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Fiesta Avocado Corn Salad",
          "Recipe": "https://dishingouthealth.com/avocado-corn-salad/#wprm-recipe-container-19225",
          "Image": "assets/images/fiesta-avocado-corn-salad.jpg",
          "Type": "Lunch",
          "Categories": " Side Dish\"",
          "Comments\r": "\"Vegetarian"
        },
        {
          "Name": "Fish sandwiches",
          "Recipe": "https://www.billyparisi.com/fish-sandwich/#recipe",
          "Image": "assets/images/fish-sandwiches.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Fish tacos",
          "Recipe": "https://natashaskitchen.com/fish-tacos-recipe/",
          "Image": "assets/images/fish-tacos.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek chicken and quinoa/rice bowls",
          "Recipe": "https://www.thechunkychef.com/20-minute-greek-chicken-rice-bowl/",
          "Image": "assets/images/greek-chicken-and-quinoa-rice-bowls.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek chicken meatballs with lemon orzo",
          "Recipe": "https://braesbites.com/easy-greek-chicken-meatballs-with-lemon-orzo/",
          "Image": "assets/images/greek-chicken-meatballs-with-lemon-orzo.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Greek Layer Dip",
          "Recipe": "https://www.thecountrycook.net/greek-layer-dip/",
          "Image": "assets/images/greek-layer-dip.jpg",
          "Type": "Appetizer",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Quick (30m or less)"
        },
        {
          "Name": "Grilled cheese and tomato soup ",
          "Recipe": "https://www.erinliveswhole.com/easy-creamy-tomato-soup-with-grilled-cheese/",
          "Image": "assets/images/grilled-cheese-and-tomato-soup-.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Vegetarian"
        },
        {
          "Name": "Grilled chicken sandwiches",
          "Recipe": "https://jamjarkitchen.com/2021/06/28/grilled-chicken-sandwich/",
          "Image": "assets/images/grilled-chicken-sandwiches.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Grilled chicken street tacos",
          "Recipe": "https://tastesbetterfromscratch.com/grilled-chicken-street-tacos/",
          "Image": "assets/images/grilled-chicken-street-tacos.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Ground Turkey tacos",
          "Recipe": "https://www.skinnytaste.com/ground-turkey-tacos/",
          "Image": "assets/images/ground-turkey-tacos.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Hibachi chicken and veggies",
          "Recipe": "https://gypsyplate.com/hibachi-chicken/",
          "Image": "assets/images/hibachi-chicken-and-veggies.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Home made pizzas",
          "Recipe": "https://fitfoodiefinds.com/no-rise-pizza-dough/#wprm-recipe-container-252456",
          "Image": "assets/images/home-made-pizzas.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Kid-friendly"
        },
        {
          "Name": "Homemade chicken nuggets",
          "Recipe": "https://thecozycook.com/homemade-chicken-nuggets/",
          "Image": "assets/images/homemade-chicken-nuggets.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Honey Cornbread ",
          "Recipe": "https://www.eatingonadime.com/sweet-honey-corn-bread-recipe/#wprm-recipe-container-17236",
          "Image": "assets/images/honey-cornbread-.jpg",
          "Type": "Side Dish",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Vegetarian\""
        },
        {
          "Name": "Indian simmer sauce with chicken and veggies",
          "Recipe": "https://www.allrecipes.com/recipe/228293/curry-stand-chicken-tikka-masala-sauce/",
          "Image": "assets/images/indian-simmer-sauce-with-chicken-and-veggies.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Instant pot chicken and veggie risotto",
          "Recipe": "https://www.happyfoodstube.com/instant-pot-chicken-risotto/",
          "Image": "assets/images/instant-pot-chicken-and-veggie-risotto.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Italian Penicillin Soup",
          "Recipe": "https://thecafesucrefarine.com/italian-chicken-pastina-soup-aka-italian-nonnas-penicilin-soup/#wprm-recipe-container-77093",
          "Image": "assets/images/italian-penicillin-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Lemony Chicken Thighs with Orzo",
          "Recipe": "https://erinobrien.life/lemony-one-pan-chicken-and-orzo-with-feta/",
          "Image": "assets/images/lemony-chicken-thighs-with-orzo.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Mexican lasagna",
          "Recipe": "https://www.thekitchn.com/mexican-lasagna-recipe-23705113",
          "Image": "assets/images/placeholder.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": ""
        },
        {
          "Name": "Minestrone soup",
          "Recipe": "https://pipingpotcurry.com/minestrone-soup-instantpot/",
          "Image": "assets/images/minestrone-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Pesto chicken and pasta",
          "Recipe": "https://www.allrecipes.com/recipe/46982/pesto-pasta-with-chicken/",
          "Image": "assets/images/pesto-chicken-and-pasta.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Potato Leek Soup",
          "Recipe": "https://www.onceuponachef.com/recipes/potato-leek-soup.html",
          "Image": "assets/images/potato-leek-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Quinoa salad",
          "Recipe": "https://theeastcoastkitchen.com/the-jennifer-aniston-salad/",
          "Image": "assets/images/quinoa-salad.jpg",
          "Type": "Lunch",
          "Categories": " Side Dish\"",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Ritz Cracker Haddock",
          "Recipe": "https://www.simplyrecipes.com/recipes/baked_cod_with_ritz_cracker_topping/",
          "Image": "assets/images/ritz-cracker-haddock.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Roasted tomato pesto cottage cheese toast",
          "Recipe": "https://www.nourishandtempt.com/pesto-and-tomato-cottage-cheese-toast/",
          "Image": "assets/images/roasted-tomato-pesto-cottage-cheese-toast.jpg",
          "Type": "",
          "Categories": "Lunch",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Rotisserie chicken Thanksgiving",
          "Recipe": "https://www.culinaryhill.com/rotisserie-style-chicken/",
          "Image": "assets/images/rotisserie-chicken-thanksgiving.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "Dinner"
        },
        {
          "Name": "Salmon hibachi ",
          "Recipe": "https://weekdaypescatarian.com/hibachi-salmon-recipe/",
          "Image": "assets/images/salmon-hibachi-.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Sloppy Joe sweet potato boats",
          "Recipe": "https://www.skinnytaste.com/sloppy-joe-baked-sweet-potatoes/",
          "Image": "assets/images/sloppy-joe-sweet-potato-boats.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Slow Cooker Marry Me Chickpea Soup",
          "Recipe": "https://www.liveeatlearn.com/slow-cooker-marry-me-chickpea-soup/",
          "Image": "assets/images/slow-cooker-marry-me-chickpea-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "\"Kid-friendly"
        },
        {
          "Name": "Smothered Turkey Meatballs",
          "Recipe": "https://www.royaleeats.com/post/smothered-meatballs",
          "Image": "assets/images/placeholder.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": ""
        },
        {
          "Name": "Southwest salad with grilled chicken",
          "Recipe": "https://hannahmageerd.com/healthy-southwest-chicken-salad-with-chipotle-southwest-dressing/",
          "Image": "assets/images/southwest-salad-with-grilled-chicken.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Spaghetti and meatballs",
          "Recipe": "https://www.onceuponachef.com/recipes/spaghetti-and-meatballs.html",
          "Image": "assets/images/spaghetti-and-meatballs.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "Dinner"
        },
        {
          "Name": "Spiced Salmon with rice and green beans ",
          "Recipe": "https://dishingouthealth.com/sumac-salmon-with-golden-rice/#wprm-recipe-container-39238",
          "Image": "assets/images/spiced-salmon-with-rice-and-green-beans-.jpg",
          "Type": "",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Steak and cheese subs",
          "Recipe": "https://www.fromvalerieskitchen.com/philly-cheesesteak-recipe-peppers-onions/",
          "Image": "assets/images/steak-and-cheese-subs.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": ""
        },
        {
          "Name": "Steak and mashed potatoes",
          "Recipe": "https://rachaelsgoodeats.com/the-perfect-tri-tip-steak-with-mashed-potatoes-and-garlicky-mushrooms/",
          "Image": "assets/images/steak-and-mashed-potatoes.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Stuffed Sweet Potatoes",
          "Recipe": "https://plantbasedonabudget.com/southwest-stuffed-sweet-potatoes/",
          "Image": "assets/images/stuffed-sweet-potatoes.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "Can add taco-seasoned ground turkey or beef for meat eaters\r"
        },
        {
          "Name": "Swedish meatballs",
          "Recipe": "https://tastesbetterfromscratch.com/swedish-meatballs/",
          "Image": "assets/images/swedish-meatballs.jpeg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Sweet potato and black bean skillet",
          "Recipe": "https://reciperunner.com/wp-json/mv-create/v1/creations/1046/print",
          "Image": "assets/images/sweet-potato-and-black-bean-skillet.jpg",
          "Type": "Dinner",
          "Categories": "\"Kid-friendly",
          "Comments\r": " Vegetarian\""
        },
        {
          "Name": "Tofu stir fry",
          "Recipe": "https://minimalistbaker.com/tofu-that-tastes-good-stir-fry/",
          "Image": "assets/images/tofu-stir-fry.jpg",
          "Type": "Dinner",
          "Categories": "Vegetarian",
          "Comments\r": "\r"
        },
        {
          "Name": "Turkey meatloaf",
          "Recipe": "https://www.inspiredtaste.net/21535/unbelievably-moist-turkey-meatloaf-recipe/",
          "Image": "assets/images/turkey-meatloaf.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Turkey sloppy joes",
          "Recipe": "https://www.ambitiouskitchen.com/healthy-turkey-sloppy-joes-homemade-sauce/",
          "Image": "assets/images/turkey-sloppy-joes.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Vegan sausage and potato soup",
          "Recipe": "https://www.rabbitandwolves.com/vegan-creamy-sausage-and-potato-soup/",
          "Image": "assets/images/vegan-sausage-and-potato-soup.jpg",
          "Type": "Lunch",
          "Categories": "Dinner",
          "Comments\r": "Vegetarian"
        },
        {
          "Name": "Vegetable lasagna",
          "Recipe": "https://cookieandkate.com/best-vegetable-lasagna-recipe/",
          "Image": "assets/images/vegetable-lasagna.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "White chicken chili",
          "Recipe": "https://www.cookingclassy.com/white-chicken-chili/#jump-to-recipe",
          "Image": "assets/images/white-chicken-chili.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Zucchini Chicken Enchilada Skillet",
          "Recipe": "https://www.joyfulhealthyeats.com/30-minute-zucchini-chicken-enchilada-skillet/",
          "Image": "assets/images/zucchini-chicken-enchilada-skillet.jpg",
          "Type": "Dinner",
          "Categories": "Kid-friendly",
          "Comments\r": "\r"
        },
        {
          "Name": "Shepherd's Pie",
          "Recipe": "https://www.foodnetwork.com/recipes/beef-shepherds-pie-recipe-1953794",
          "Image": "assets/images/placeholder.jpg",
          "Type": "Dinner",
          "Categories": "",
          "Comments\r": "\r"
        },
        {
          "Name": "Chicken Broccoli Rice Casserole",
          "Recipe": "https://thecozycook.com/broccoli-cheddar-chicken-and-rice-casserole/",
          "Image": "assets/images/chicken-broccoli-rice-casserole.jpg",
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

    
      
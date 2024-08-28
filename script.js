const API_KEY=" 428f5e1949af4ad5a743a6742d8fc090";
const recipesListEl=document.getElementById("recipe-list")

function displayRecipes(recipes){
    recipesListEl.innerHTML=""
    recipes.forEach((recipe)=>{
        const recipeItemEl=document.getElementById("li");
        recipeItemEl.classList.add("recipe-item");

        recipeImageEl=document.createElement("img");

        recipeImageEl.src=recipe.image;
        recipeImageEl.alt="recipe.image";

        recipeTitleEl=document.createElement("h2");
        recipeTitleEl.innerText=recipe.title;

        recipeIngredientsEl=document.createElement("p");
        recipeIngredientsEl.innerHTML=
        <strong>Ingredients :</strong> ${
            recipe.extendedIngredients.map((ingredient)=>
            ingredient.original).join(",")};

        recipeLinkEl=document.createElement("a");
        recipeLinkEl.href=recipe.sourceUrl;
        recipeLinkEl.innerText="View Recipe";



        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitlrEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipesListEl.appenrdChild(recipeItemEl);
        recipesListEl.appenrdChild(recipeItemEl);

        
        

    })
}


async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`)
     
    const date=await response.json()

    return data.recipes;
}

async function init(){
    const recipes =await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);

}
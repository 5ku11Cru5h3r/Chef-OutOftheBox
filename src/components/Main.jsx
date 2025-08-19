import { useState } from "react";
// import {test} from "./test.md";
import { generateRecipe} from "./ai"
import IngredientsList from "./ingredientsList";
import ChefRecipe from "./ChefRecipe";


  // function onFormSubmit(event){

  //     event.preventDefault()
  //     const formdata = new FormData(event.currentTarget)
  //     const newIngredient = formdata.get("ingredient")
  //     if (newIngredient && !ingredients.includes(newIngredient)) {
  //         funcky(prev => [...prev, newIngredient]);
  //     }
  //     // ingredients.push(newIngredient);
  //     // console.log(newIngredient)
  //     // console.log("Form Submitted")
  // }
  export default function Main() {
  // const ingredientSample = ["Chicken", "Oregano", "Tomatoes","Milk"];
  const ingredientSample = [];
  let [ingredients, funcky] = useState([...ingredientSample]);

  // const [AI_Recipe,AI_Recipe_state]=useState();
  function onFormSubmit(formdata) {
    const newIngredient = formdata.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      funcky((prev) => [...prev, newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)]);
    }
  }

  const [recipe,recipeState]=useState("")
  const [preference,preferenceState]=useState("vegetarian")
  async function toggleRecipe(){
     const recipeResponse= await generateRecipe(ingredients)
     recipeState(recipeResponse)
     
  }
  function preferenceButton(){

  }
  return (
    <main>
      <form action={onFormSubmit}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. Oregano 🌿, Onions 🧅..."
          name="ingredient"
          className="inputfield"
        />
        <button className="AddIngredient">Add Ingredient</button>
      </form>
      {/* <button className="" onClick={preferenceButton}>{preference}</button> */}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} toggle={toggleRecipe}/>
        )}
        {recipe!=""?(
          <ChefRecipe recipe={recipe} preference ={preference}/>
        ):null
        }

    </main>
  );
}

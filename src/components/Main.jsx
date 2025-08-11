import { useState } from "react";
export default function Main(){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
    let [ingredients,funcky] = useState([]);
    const  ListOfIngredients=ingredients.map(ingredient =>(<li key={ingredient}>{ingredient}</li>))
    
    function onFormSubmit(event){

        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const newIngredient = formdata.get("ingredient")
        if (newIngredient && !ingredients.includes(newIngredient)) {
            funcky(prev => [...prev, newIngredient]);
        }
        // ingredients.push(newIngredient);
        // console.log(newIngredient)
        // console.log("Form Submitted")
    }
    return(
        <main>
            <form onSubmit={onFormSubmit}>
            <input type="text" 
            aria-label="Add ingredient"
            placeholder="e.g. Oregano, Onions.."
            name="ingredient"
            className="inputfield"
            />
            <button className="AddIngredient" >+ Add Ingredient</button>
            </form>
            <ul>
                {ListOfIngredients}
            </ul>
        </main>
    )
}
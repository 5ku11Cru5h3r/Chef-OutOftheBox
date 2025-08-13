import { useState } from "react";
export default function Main() {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  let [ingredients, funcky] = useState([]);
  const ListOfIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
  function onFormSubmit(formdata) {
    const newIngredient = formdata.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      funcky((prev) => [...prev, newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)]);
    }
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
      {ingredients.length > 0 && (
        <section>
          <h2 id="onHand">Ingredients on hand 🫴:</h2>
          <ul className="ingredients_list" aria-live="polite">
            {ListOfIngredients}
          </ul>
          <div className="get-recipe">
            <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from the items you have on hand.</p>
            </div>
            <button>Get Recipe</button>
          </div>
        </section>
      )}
    </main>
  );
}

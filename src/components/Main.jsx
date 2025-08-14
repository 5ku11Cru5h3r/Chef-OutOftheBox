import { useState } from "react";
// import {test} from "./test.md";
export default function Main() {
  const ingredientSample = ["Chicken", "Oregano", "Tomatoes","Milk"];
  let [ingredients, funcky] = useState([...ingredientSample]);
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

  const [recipeShown,recipeShownState]=useState(false)

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
          <h2 id="onHand">Ingredients on hand {ingredients.length<4 ?`(need 🫴 ${4-ingredients.length} more)`:"🫴"}:</h2>
          <ul className="ingredients_list" aria-live="polite">
            {ListOfIngredients}
          </ul>
          {ingredients.length>=4 ? <div className="get-recipe">
            <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from the items you have on hand.</p>
            </div>
            <button onClick={()=>recipeShownState((prev)=>!prev)}>Get Recipe</button>
          </div> : null}
        </section>
        )}
        {recipeShown==true?(
          <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
        ):null
        }

    </main>
  );
}

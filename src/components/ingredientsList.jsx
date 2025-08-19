export default function IngredientsList(props) {
  const ListOfIngredients = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2 id="onHand">
        Ingredients on hand{" "}
        {props.ingredients.length < 4
          ? `(need 🫴 ${4 - props.ingredients.length} more)`
          : "🫴"}
        :
      </h2>
      <ul className="ingredients_list" aria-live="polite">
        {ListOfIngredients}
      </ul>
      {props.ingredients.length >= 4 ? (
        <div className="get-recipe">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from the items you have on hand.</p>
          </div>
          <button onClick={props.toggle}>
            Get Recipe
          </button>
        </div>
      ) : null}
    </section>
  );
}

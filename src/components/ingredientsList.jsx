// export default function IngredientsList(props) {
//   const ListOfIngredients = props.ingredients.map((ingredient) => (
//     <li key={ingredient}>{ingredient}</li>
//   ));
//   return (
//     <section>
//       <h2 id="onHand">
//         Ingredients on hand{" "}
//         {props.ingredients.length < 4
//           ? `(need 🫴 ${4 - props.ingredients.length} more)`
//           : "🫴"}
//         :
//       </h2>
//       <ul className="ingredients_list" aria-live="polite">
//         {ListOfIngredients}
//       </ul>
//       {props.ingredients.length >= 4 ? (
//         <div className="get-recipe">
//           <div>
//             <h3>Ready for a recipe?</h3>
//             <p>Generate a recipe from the items you have on hand.</p>
//           </div>
//           <button onClick={props.toggle}>
//             Get Recipe
//           </button>
//         </div>
//       ) : null}
//     </section>
//   );
// }
import { useState } from "react";

export default function IngredientsList(props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // Disable button
    setLoading(true);

    try {
      // Call parent function (props.toggle)
      await props.toggle();
    } finally {
      // Re-enable button after recipe is ready
      setLoading(false);
    }
  };

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
          <button onClick={handleClick} disabled={loading}>
            {loading ? "Generating..." : "Get Recipe"}
          </button>
        </div>
      ) : null}
    </section>
  );
}

import { useEffect, useState } from "react";
import styles from "./Fooddetails.module.css";
export default function Fooddetail({ foodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const APIkey = "2a2e9e3fc631411090d6c9632b469569";
  useEffect(() => {
    async function getFood() {
      const res = await fetch(`${URL}?apiKey=${APIkey}`);
      const data = await res.json();
      setFood(data);
      setLoading(false);
    }
    getFood();
  }, [foodId]);
  console.log(food);
  return (
    <div>
      <div className={styles.recipe}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <strong>
            <span>👫🏻 Serves {food.servings}</span>
          </strong>
          <strong>
            <span>
              {food.vegetarian ? "🥬 Vegetarian" : "🥩 Non-Vegetarian"}
            </span>
          </strong>
          <strong>
            <span>{food.vegan ? " Vegan" : ""}</span>
          </strong>
        </div>
        <div>
          <span> 💲{Math.round(food.pricePerServing / 100)} Per serving</span>
        </div>
        <h2>Ingrediants</h2>
        {food.extendedIngredients.map((ingred) => (
          <div>
            <h3>{ingred.name}</h3>
          </div>
        ))}
        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {loading ? (
              <p>Loading ...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => {
                return <li>{step.step}</li>;
              })
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

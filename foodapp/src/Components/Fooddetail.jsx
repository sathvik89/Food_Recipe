import { useEffect, useState } from "react";
import styles from "./Fooddetails.module.css";
import Foodingred from "./Foodingred";
export default function Fooddetail({ foodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const APIkey = "e3a4a49e876f44f69a5f709104430bfe";
  useEffect(() => {
    async function getFood() {
      const res = await fetch(`${URL}?apiKey=${APIkey}`);
      const data = await res.json();
      setFood(data);
      setLoading(false);
    }
    getFood();
  }, [foodId]);
  // console.log(food);/
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.recipe}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <div className={styles.recipeImageDiv}>
          <img className={styles.recipeImage} src={food.image} alt="" />
        </div>

        <div className={styles.recipeDetails}>
          <span>
            • <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <strong>
            • <span>👫🏻 Serves {food.servings}</span>
          </strong>
          <strong>
            <span>
              • {food.vegetarian ? "🥬 Vegetarian" : "🥩 Non-Vegetarian"}
            </span>
          </strong>
          <strong>
            <span>{food.vegan ? " Vegan" : ""}</span>
          </strong>
        </div>
        <div className={styles.cost}>
          <span> 💲{Math.round(food.pricePerServing / 100)} Per serving</span>
        </div>
        <Foodingred food={food} loading={loading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {loading ? (
              <p>Loading ...</p>
            ) : (
              food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 &&
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

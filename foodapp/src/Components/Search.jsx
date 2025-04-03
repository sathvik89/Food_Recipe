import { useEffect, useState } from "react";
import styles from "./search.module.css";
export default function Search({ foodItem, setFoodItem }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const APIkey = "2a2e9e3fc631411090d6c9632b469569";
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${APIkey}`);
      const Data = await response.json();
      setFoodItem(Data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./Search.module.css";
export default function Search({ setFoodItem }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const APIkey = "e3a4a49e876f44f69a5f709104430bfe";
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${APIkey}`);
      const Data = await response.json();
      setFoodItem(Data.results);
    }
    fetchFood();
  }, [query, setFoodItem]);
  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="🔍 Search dish here... "
        className={styles.input}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
export default function Search({ foodItem, setFoodItem }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const APIkey = "e4d2df4917f44d76bc3ac2dd8ac52ccd";
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
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

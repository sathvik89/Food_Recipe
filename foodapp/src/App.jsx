import { useState } from "react";
import Search from "./Components/Search";
import FoodItem from "./Components/FoodItems";

function App() {
  const [foodItem, setFoodItem] = useState([]);
  return (
    <>
      <div>
        <Search foodItem={foodItem} setFoodItem={setFoodItem} />
        <FoodItem foodItem={foodItem} />
      </div>
    </>
  );
}

export default App;

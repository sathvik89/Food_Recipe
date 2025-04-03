import { useState } from "react";
import Search from "./Components/Search";
import FoodItem from "./Components/FoodItems";
import Nav from "./Components/Nav";
import "./App.css"; 
function App() {
  const [foodItem, setFoodItem] = useState([]);
  return (
    <>
      <div>
        <Nav />
        <Search foodItem={foodItem} setFoodItem={setFoodItem} />
        <FoodItem foodItem={foodItem} />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Search from "./Components/Search";
import FoodItem from "./Components/FoodItems";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Fooddetail from "./Components/Fooddetail";
import Copyright from "./Components/Copyright";
function App() {
  const [foodId, setFoodID] = useState("715415");
  const [foodItem, setFoodItem] = useState([]);
  return (
    <>
      <div>
        <Nav />
        <Search foodItem={foodItem} setFoodItem={setFoodItem} />
        <Container>
          <InnerContainer>
            <FoodItem setFoodID={setFoodID} foodItem={foodItem} />
          </InnerContainer>
          <InnerContainer>
            <Fooddetail foodId={foodId} />
          </InnerContainer>
        </Container>
        <Copyright />
      </div>
    </>
  );
}

export default App;

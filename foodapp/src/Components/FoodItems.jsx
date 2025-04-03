import Food from "./Food";
export default function FoodItem({ foodItem, setFoodID }) {
  return (
    <div>
      {foodItem.map((item) => {
        return <Food setFoodID={setFoodID} key={item.id} item={item} />;
      })}
    </div>
  );
}

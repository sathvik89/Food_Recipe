import Food from "./Food";
export default function FoodItem({ foodItem, setFoodID }) {
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll",
        flexWrap: "wrap",
        height: "500px",
      }}
    >
      {foodItem.map((item) => {
        return <Food setFoodID={setFoodID} key={item.id} item={item} />;
      })}
    </div>
  );
}

import Food from "./Food";
export default function FoodItem({ foodItem, setFoodID }) {
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll",
        flexWrap: "wrap",
        height: "450px",
        border: "solid white",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgb(0,0,1,0.6)",
      }}
    >
      {foodItem.map((item) => {
        return <Food setFoodID={setFoodID} key={item.id} item={item} />;
      })}
    </div>
  );
}

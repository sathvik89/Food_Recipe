import Food from "./Food";
export default function FoodItem({ foodItem }) {
  return (
    <div>
      {foodItem.map((item) => {
        return <Food key={item.id} item={item} />;
      })}
    </div>
  );
}

import Item from "./item";

export default function Foodingred({ food, loading }) {
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        food.extendedIngredients.map((ingred, index) => (
          <Item ingred={ingred} index={index} />
        ))
      )}
      {/* {food.extendedIngredients &&
       } */}
    </div>
  );
}

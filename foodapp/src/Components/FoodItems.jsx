export default function FoodItem({ foodItem }) {
  return (
    <div>
      {foodItem.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}

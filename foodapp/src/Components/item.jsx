import styles from "./item.module.css";

export default function Item({ index, ingred }) {
  return (
    <div>
      <div className={styles.mainItemcontainer} key={index}>
        <div className={styles.imageStyle}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + ingred.image
            }
            alt=""
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{ingred.name}</div>
          <div className={styles.amount}>
            {ingred.amount} {ingred.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

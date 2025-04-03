import styles from "./food.module.css";
export default function Food({ item }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.image} alt="" />
      <div className={styles.imageinfo}>
        <p className={styles.name}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.button}>View Recipe</button>
      </div>
    </div>
  );
}

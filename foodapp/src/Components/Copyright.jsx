import styles from "./Copyright.module.css";
export default function Copyright() {
  return (
    <div className={styles.Footer}>
      © 2025 - {new Date().getFullYear()} FoodApp. All rights reserved.
    </div>
  );
}

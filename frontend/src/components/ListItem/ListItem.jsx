import { useState } from "react";
import cross from "img/icons/cross.svg";
import styles from "./ListItem.module.css";

export const ListItem = ({ name, type, color, id, bikeStatus, price }) => {
  const [status, setStatus] = useState(bikeStatus);

  const itemClass = () => {
    switch (status) {
      case "Unavailable":
        return `${styles.item} ${styles.unavailable}`;
      case "Busy":
        return `${styles.item} ${styles.busy}`;
      default:
        return `${styles.item}`;
    }
  };

  return (
    <li className={itemClass()}>
      <div>
        <p className={styles["item-name"]}>
          <span>{name}</span> - {type} ({color})
        </p>

        <p className={styles["item-id"]}>Id: {id}</p>

        <label className={styles["item-status"]}>
          Status:
          <select name="status">
            <option value="Available" selected={status === "Available"}>
              Available
            </option>

            <option value="Unavailable" selected={status === "Unavailable"}>
              Unavailable
            </option>

            <option value="Busy" selected={status === "Busy"}>
              Busy
            </option>
          </select>
        </label>
      </div>

      <div>
        <button type="button" className={styles["item-button"]}>
          <img src={cross} alt="cross-icon" />
        </button>

        <p className={styles["item-price"]}>{price} UAH/hr.</p>
      </div>
    </li>
  );
};

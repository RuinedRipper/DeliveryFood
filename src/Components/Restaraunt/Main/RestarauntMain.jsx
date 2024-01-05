import styles from "./Restaraunt.module.css";
import Rating from "../../../Images/RatingIMG.png";
import { useParams } from "react-router-dom";
import MenuList from "../MenuList/MenuList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RestarauntMain = () => {
  let { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const id = parseInt(restaurantId, 10);
    axios
      .get(
        `https://deliveryfoodbd-b280d-default-rtdb.europe-west1.firebasedatabase.app/dishList.json`
      )
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.error("Помилка при завантажені даних ресторанів:", error);
      });
  }, [restaurantId]);

  if (!restaurant) {
    return <div className={styles.Loading}>Завантаження...</div>;
  }

  return (
    <section className={styles.MainContainer}>
      <section className={styles.HeaderRestoraunt}>
        <h1>{restaurant.name}</h1>
        <p className={styles.Rating}>4.99</p>{" "}
        <p className={styles.Price}>От 5 $</p>{" "}
        <ul>
          <li>Піцці і суші</li>{" "}
        </ul>
      </section>
      <MenuList />
    </section>
  );
};

export default RestarauntMain;

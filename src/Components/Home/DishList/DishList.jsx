import React, { useState, useEffect } from "react";
import axios from "axios";
import Dish from "../Dish/Dish";

import image1 from "../../../Images/Restaurant/image1.png";
import image2 from "../../../Images/Restaurant/image2.png";
import image3 from "../../../Images/Restaurant/image3.png";
import image4 from "../../../Images/Restaurant/image4.png";
import image5 from "../../../Images/Restaurant/image5.png";
import image6 from "../../../Images/Restaurant/image6.png";

import styles from "./DishList.module.css";

const images = [image1, image2, image3, image4, image5, image6];

const DishList = ({ searchTerm }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://deliveryfoodbd-b280d-default-rtdb.europe-west1.firebasedatabase.app/dishList.json"
      )
      .then((response) => {
        setDishes(response.data);
      })
      .catch((error) => {
        console.error("Помилка при завантажені даних:", error);
      });
  }, []);

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.Contain}>
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          DishName={dish.name}
          image={images[dish.id - 1]}
          to={dish.to}
        />
      ))}
    </section>
  );
};

export default DishList;

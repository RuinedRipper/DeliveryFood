import React from "react";
import Menu from "../Menu/RestarauntMenu";

import image1 from "../../../Images/Menu/image1.png";
import image2 from "../../../Images/Menu/image2.png";
import image3 from "../../../Images/Menu/image3.png";
import image4 from "../../../Images/Menu/image4.png";
import image5 from "../../../Images/Menu/image5.png";
import image6 from "../../../Images/Menu/image6.png";

import styles from "./MenuList.module.css";

const MenuData = [
  {
    id: 1,
    name: "Ролл угор стандарт",
    image: image1,
    Description: "Рис, угор, соус унагі, кунжут, водорості норі.",
    Price: 4,
  },
  {
    id: 2,
    name: "Каліфорнія лосось стандарт",
    image: image2,
    Description:
      "Рис, лосось, авокадо, огірок, майонез, ікра масаго, водорості норі.",
    Price: 5,
  },
  {
    id: 3,
    name: "Окінава стандарт",
    image: image3,
    Description:
      "Рис, креветка варена, сир вершковий, лосось, огірок свіжий...",
    Price: 5,
  },
  {
    id: 4,
    name: "Цезар макі хl",
    image: image4,
    Description:
      "Рис, куряча грудка копчена, ікра масаго, томат, айсберг, соус цезар...",
    Price: 4,
  },
  {
    id: 5,
    name: "Ясай макі стандарт 185 г",
    image: image5,
    Description:
      "Рис, помідор свіжий, перець болгарський, авокадо, огірок, айсберг",
    Price: 4,
  },
  {
    id: 6,
    name: "Ролл з креветкою стандарт",
    image: image6,
    Description: "Рис, водорості норі, креветки варені, сир вершковий, огірки",
    Price: 4,
  },
];

const MenuList = () => {
  return (
    <section className={styles.Contain}>
      {MenuData.map((item) => (
        <Menu
          key={item.id}
          id={item.id}
          img={item.image}
          Name={item.name}
          Description={item.Description}
          Price={item.Price}
        />
      ))}
    </section>
  );
};

export default MenuList;

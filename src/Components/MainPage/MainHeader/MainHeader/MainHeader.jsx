import React from "react";


import  "./MainHeader.scss";

import Navigation from "../Navigation/Navigation";
import Banner from "../Banner/Banner";
import CardProductInfo from "../ProductCard/CardProductInfo";
import FooterMain from "../Footer/FooterMain";
import { useSelector } from "react-redux";


const MainHeader = (props) => {
//   const DataProduct = [
//     {
//         url: '/img_a.jpg',
//         id:"c1",
//         name: "Пицца плюс",
//         time: 50,
//         grade: 4.5,
//         price: 900,
//     },
//     {
//         url: '/img_b.jpg',
//         id:"c2",
//         name: "Тануки",
//         time: 45,
//         grade: 4.4,
//         price: 600,
//     },
//     {
//         url: '/img_c.jpg',
//         id:"c3",
//         name: "FoodBand",
//         time: 50,
//         grade: 4.6,
//         price: 750,
//     },
//     {
//         url: '/img_d.jpg',
//         id:"c4",
//         name: "Жадина-пицца",
//         time: 50,
//         grade: 4.5,
//         price: 900,
//     },
//     {
//         url: '/img_f.png',
//         id:"c5",
//         name: "Точка еды",
//         time: 60,
//         grade: 4.8,
//         price: 1100,
//     },
//     {
//         url: '/img_g.png',
//         id:"c6",
//         name: "PizzaBurger",
//         time: 40,
//         grade: 4.3,
//         price: 800,
//     }
// ]
const DataProduct = useSelector((state) => state.products)

  return (
    <React.Fragment>
    <header className="main-header">
       <Navigation />
    </header>
    <section className="advertising">
       <Banner/>
    </section>
    <main>
      <ul className="content">
        {DataProduct.map((Product) => (
          <CardProductInfo id={Product.id}

          ></CardProductInfo>
        ))}
      </ul>
    </main>
    <footer>
      <FooterMain></FooterMain>
    </footer>
    </React.Fragment>
  );
};

export default MainHeader;

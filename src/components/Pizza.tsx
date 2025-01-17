import { Pizza } from "../types";
import PizzaCSS from "../components/Pizza.module.css";
import React from "react";
import { useAddToCart } from "./AddToCart";

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCartClick = () => {
    addToCart(pizza);
  };

  return (
    <li className={PizzaCSS.container} key={pizza.id}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

export default PizzaItem;

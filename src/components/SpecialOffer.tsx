import { Pizza } from "../types";
import React from "react";
import SpecialOfferCSS from "./SpecialOffer.module.css";
import { useAddToCart } from "./AddToCart";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCartClick = () => {
    addToCart(pizza);
  };

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default SpecialOffer;

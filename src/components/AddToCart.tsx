import { CartItem, useStateDispatch } from "./AppState";

import React from "react";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCart = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick = (item: CartItem) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: { item },
      });
    };

    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCartClick}
      />
    );
  };

  return AddToCart;
}

export const WithAddToCartProps: React.FC<{
  children: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { item },
    });
  };

  return children({ addToCart });
};

export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { item },
    });
  };

  return addToCart;
};

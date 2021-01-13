import AppCSS from "./App.module.css";
import AppStateProvider from "../components/AppState";
import Cart from "./Cart";
import Pizza from "../components/Pizza";
import PizzaSVG from "../svg/pizza.svg";
import React from "react";
import SpecialOffer from "./SpecialOffer";
import pizzas from "../data/pizzas.json";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <h1 className={AppCSS.siteTitle}>Delicius Pizza</h1>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;

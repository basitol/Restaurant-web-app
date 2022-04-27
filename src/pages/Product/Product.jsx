import React from "react";
import "./Product.css";
import { ProductCard } from "../../components";
import cake from "../../assets/cake.png";
import cheese from "../../assets/cheese.png";

const Product = () => {
  return (
    <>
      <section className="flex flex-jc-sb">
        <ProductCard
          head="Donut"
          ingredients={
            "milk, egg, butter, baking powder, sugar, flour, chocolate sauce"
          }
          src={cake}
          price={35}
        />
        <ProductCard
          head="Cheese Burger"
          ingredients={
            "tomato, mozzarella, meat, lettuse, cheese, onion, pickled cucumber, paprika"
          }
          src={cheese}
        />
        <ProductCard
          head="Mushroom Pizza"
          ingredients={
            "mushroom, tomato, mozzarella, chili pepper, olive, ham, tomato paste, onion, paprika"
          }
          src={cake}
        />
      </section>
    </>
  );
};

export default Product;

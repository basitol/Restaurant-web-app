import React from "react";
import "./ProductCard.css";

const ProductCard = ({ head, ingredients, src, price }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={src} />
      </div>
      <h4 className="head">{head}</h4>
      <p>{ingredients}</p>
      <div className="bottom flex flex-jc-sb">
        <div className="price">{`$${price}`}</div>
        <div className="add">+</div>
      </div>
    </div>
  );
};

export default ProductCard;

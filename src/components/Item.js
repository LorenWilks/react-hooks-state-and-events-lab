import React, {useState} from "react";

function Item({ name, category }) {
  const [notInCart, setNotInCart] = useState(true)

    function toggleCart(){
      setNotInCart((notInCart) => !notInCart)
    }

  const cartClass = notInCart ? "" : "in-cart"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{notInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

import React from "react";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";
import { ProductQuickViewContext } from "../../contexts/product-quick-view-context";

function ItemToCheckOut({ item }) {
  const { name, imageUrl, quantity, price, id } = item;

  const { total, deleteCartItem } = useContext(CreateCartContext);
  const { incrementItem, decrementItem } = useContext(ProductQuickViewContext);
  return (
    <div>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
          <span
            className="pointer"
            onClick={() => {
              decrementItem(item);
            }}
          >
            &#60;
          </span>
          <span className="q">{quantity}</span>
          <span
            className="pointer"
            onClick={() => {
              incrementItem(item);
            }}
          >
            &#62;
          </span>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              decrementItem(id);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemToCheckOut;

import React from "react";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";
import ItemToCheckOut from "../itemToCheckout.component/itemTocheckout";
function ItemCheckOut() {
  const { cartItems } = useContext(CreateCartContext);
  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((item) => {
          return <ItemToCheckOut item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemCheckOut;

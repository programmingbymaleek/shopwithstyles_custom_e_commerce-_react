import React from "react";
import styled from "styled-components";
import CustomButton from "../button.component/button.component";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";

function CartDropDown() {
  const { cartItems } = useContext(CreateCartContext);

  return (
    <CartDropDownContainer>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((cartItem) => {
            return <p key={cartItem}>{cartItem.id}</p>;
          })}
        </div>
        <CustomButton btn_label={"Check out"} />
      </div>
    </CartDropDownContainer>
  );
}

export default CartDropDown;

const CartDropDownContainer = styled.div`
  .cart-dropdown-container {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 21rem;
    z-index: 5;

    .empty-message {
      font-size: 18px;
      margin: 50px auto;
    }

    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }

    button {
      margin-top: auto;
    }
  }
`;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductQuickViewContext } from "../../contexts/product-quick-view-context";
import styled from "styled-components";
import CustomButton from "../button.component/button.component";
import MenSize from "../../shoe-sizes-data.json";

import { useState } from "react";
import { act } from "react-dom/test-utils";
import { CreateCartContext } from "../../contexts/cart.context";

function ProductOverView() {
  const [error, setError] = useState("");
  const { productToView, incrementItem, decrementItem } = useContext(
    ProductQuickViewContext
  );
  const { addItemToCart } = useContext(CreateCartContext);

  const [active, setInActive] = useState(false);

  const isnowClicked = (e) => {
    const setSize = e.target.value;
    productToView.size = setSize;
    console.log(productToView);
  };
  const Navigate = useNavigate();
  const goBackToCollections = () => {
    Navigate("/collections");
  };

  const { name, price, quantity, id, imageUrl } = productToView;

  const addCartItem = () => {
    if (productToView.size === "") {
      setError("Please select a size");
      return;
    }
    addItemToCart(productToView);
  };

  if (!productToView.id) {
    return (
      <div>
        <button onClick={goBackToCollections}>Go to collections</button>
      </div>
    );
  }
  return (
    <Product_overview_container>
      <div className="product_container" key={id}>
        <div className="product_image grid-col-span-2">
          <img src={`${imageUrl}`} alt={`${name}`} />
        </div>
        <div className="product_overview grid-col-span-3 ">
          <h1>{name}</h1>
          <h2>{`$${price}.00`}</h2>
          <p>$40 OFF your qualifing first order of $20</p>
          <p>Pro price: $members only</p>
          <br />
          <br />
          <p>free shipping </p>
          <p>get it between Thu. feb 2 - Sat. Feb 4 to 'api call'</p>
          <br />
          <br />
          <div className="qantity_adjustment">
            <div className="btn_container">
              <button
                className="left"
                onClick={() => {
                  decrementItem(productToView);
                }}
              >
                -
              </button>
              <button>{quantity}</button>
              <button
                className="right"
                type="button"
                onClick={() => {
                  incrementItem(productToView);
                }}
              >
                +
              </button>
            </div>
            <CustomButton
              type={"button"}
              btn_label={"Add to cart"}
              btntype="inverted"
              onClick={addCartItem}
            />
          </div>
          <br />
          <div>
            {error ? (
              <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
            ) : (
              ""
            )}
          </div>
          <div className="size">
            {MenSize.mens.map((size) => (
              <button key={size} onClick={isnowClicked} value={size}>
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* <p>Name of product : {name}</p>
      <p>Unit Price of product: {price}</p>
      <p> Quantity: {quantity}</p>
      <button
        onClick={() => {
          decrementItem(productToView);
        }}
      >
        decrement
      </button>
      <span>___</span>{" "}
      <button
        onClick={() => {
          incrementItem(productToView);
        }}
      >
        increment
      </button> */}
      </div>
    </Product_overview_container>
  );
}

export default ProductOverView;

const Product_overview_container = styled.div`
  .product_container {
    padding: 3rem 3rem 0 5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    .button-container {
      min-width: 250px !important;
      border-radius: 20px;
    }
    .size {
      button {
        margin: 0.2rem;
        width: 4.5rem !important;
      }
    }
  }
  .grid-col-span-2 {
    grid-column: span 3;
  }
  .grid-col-span-3 {
    grid-column: span 2;
  }
  .product_image {
    max-width: 55rem;
    max-height: 45rem;
    // border: 2px solid red;
    img {
      width: 100%;
      height: 100%;
      object-fit: fit;
    }
  }
  .product_overview {
    max-width: 40rem;
    height: 65rem;
    // border: 1px solid blue;
    padding: 1rem;
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;

    button {
      width: 3rem !important;
      height: 3rem !important;
      outline: none;
      background: none;
    }

    .qantity_adjustment {
      display: flex;
      gap: 4rem;
      .btn_container {
      }
      span {
        border: 1px solid green;
        padding: 0.9rem;
      }
      span:focus {
        outline: none;
        box-shadow: none;
      }
      span:hover {
        cursor: pointer;
      }

      .right {
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        border-left: none;
      }
      .left {
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        border-right: none;
      }
    }
  }
`;

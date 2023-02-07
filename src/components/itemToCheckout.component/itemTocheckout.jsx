import React from "react";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";
import { ProductQuickViewContext } from "../../contexts/product-quick-view-context";

import styled from "styled-components";

function ItemToCheckOut({ item }) {
  const { name, imageUrl, quantity, price, id, size } = item;

  const { total, deleteCartItem } = useContext(CreateCartContext);
  const { incrementItem, decrementItem } = useContext(ProductQuickViewContext);
  return (
    <ProductCheckOutContainer>
      <div className="main-product">
        <div className="image-content">
          <div className="image_container">
            <img src={imageUrl} alt={`${name}`} />
          </div>

          <div className="description">
            <p className="item-name">{name}</p>
            <p>item # {id}</p>
            <p>Size: {size}</p>
          </div>
        </div>
        <div className="description1">
          <p className="item-name">{name}</p>
          <p>item # {id}</p>
          <p>Size: {size}</p>
          <div className="product-quanity">quantity: {quantity}</div>
          <div className="total"> total: {price}</div>
        </div>
        <div className="product-quanity phidden">{quantity}</div>
        <div className="price phidden">{price}</div>
        <div className="total phidden">{name}</div>
      </div>

      {/* <div className="checkout-item-container">
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
      </div> */}
    </ProductCheckOutContainer>
  );
}

export default ItemToCheckOut;

const ProductCheckOutContainer = styled.div`
  .description1 {
    display: none;
  }
  .description {
    padding: 0 1rem;
    .item-name {
      font-weight: normal;
      font-size: 20px;
      text-transform: capitalize;
    }
  }
  .main-product > * {
    flex-basis: 5rem;
    padding: 0;
  }
  .main-product {
    margin: 1rem;
    display: flex;
    .image-content {
      display: flex;
      flex-grow: 3;
      .image_container {
        max-width: 10rem;
        img {
          width: 100%;
        }
      }
    }
    .product-quanity {
      flex-grow: 1;
      margin-left: 5rem;
    }
    .price {
      flex-grow: 1;
    }
    .total {
      flex-grow: 1;
    }
  }

  // media queries

  @media screen and (max-width: 775px) {
    .product-quanity {
      margin-left: 0rem !important;
    }
    .phidden {
      display: none;
    }
    .image_container {
      width: 10rem;
    }
    .main-product {
      display: flex;
      gap: 1rem;
    }
    .main-product > * {
      flex: 1 !important;
    }
    .description {
      display: none;
    }
    .description1 {
      display: block;
    }
  }
`;

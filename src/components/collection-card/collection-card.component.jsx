import React from "react";
import styled from "styled-components";
import CustomButton from "../button.component/button.component";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductQuickViewContext } from "../../contexts/product-quick-view-context";

function CollectionCard({ products }) {
  const { name, imageUrl, price } = products;

  const { setProductToView } = useContext(ProductQuickViewContext);

  const Navigate = useNavigate();
  const overView = () => {
    // setProductToView([{ ...products, quantity: 1 }]);
    setProductToView({ ...products, quantity: 1 });

    Navigate("/collectons/productview");
  };

  return (
    <CollectionsContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      {
        <CustomButton
          btn_label={"Quick view"}
          btntype={"inverted"}
          onClick={overView}
        />
      }
    </CollectionsContainer>
  );
}

export default CollectionCard;

const CollectionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 125px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
      cursor: pointer;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`;

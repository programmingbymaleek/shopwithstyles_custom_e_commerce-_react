import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product_Context } from "../../contexts/product.context.component";
import CollectionCard from "../collection-card/collection-card.component";
import styled from "styled-components";
import { useEffect } from "react";
function Collections() {
  const { productCollections } = useContext(Product_Context);
  const Navigate = useNavigate();

  return (
    <Collections_Cards className="container">
      <div className="collections-container">
        {productCollections.map((collection) => {
          return (
            <div key={collection.id}>
              <CollectionCard products={collection} />
            </div>
          );
        })}
      </div>
    </Collections_Cards>
  );
}

export default Collections;

const Collections_Cards = styled.div`
  .collections-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

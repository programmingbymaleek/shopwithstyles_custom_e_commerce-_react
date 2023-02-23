import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import CollectionCard from "../collection-card/collection-card.component";

import { Product_Context } from "../../contexts/product.context.component";

function ShoeGroup() {
  const { group } = useParams();

  console.log(`from the ${group} page`);
  const { productCollections } = useContext(Product_Context);
  const [product, setProduct] = useState(productCollections[group]);
  console.log("from shoe group component");
  console.log(productCollections[group]);

  const [message, setMessage] = useState("searching...");

  const Navigate = useNavigate();

  function timer() {
    setTimeout(() => {
      setMessage("No item Found");
    }, 5000);
  }

  useEffect(() => {
    setProduct(productCollections[group]);
  }, [productCollections, group]);
  return (
    <Collections_Cards>
      {product ? (
        <div className="container">
          {
            <div className="group_title">
              <p>
                <span>{group.toUpperCase()}</span>
              </p>
              <div className="collections-container">
                {productCollections[group].map((shoe) => (
                  <div key={shoe.shoe_id}>
                    <CollectionCard products={shoe} />
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="list-container">
          {timer()}
          <div>
            <p>{message} </p>
          </div>
        </div>
      )}
    </Collections_Cards>
  );
}

export default ShoeGroup;

const Collections_Cards = styled.div`
  .list-container {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
    }
  }
  .group_title {
    margin: 2rem 0;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    span:hover {
      cursor: pointer;
    }
  }
  .collections-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    font-weight: normal;
  }
`;

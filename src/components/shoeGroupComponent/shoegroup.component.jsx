import React from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    setProduct(productCollections[group]);
  }, [productCollections, group]);
  return (
    <div>
      {product ? (
        <Collections_Cards className="container">
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
        </Collections_Cards>
      ) : (
        <div>undifined</div>
      )}
    </div>
  );
}

export default ShoeGroup;

const Collections_Cards = styled.div`
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

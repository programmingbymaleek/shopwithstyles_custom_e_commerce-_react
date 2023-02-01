import { createContext, useState } from "react";
import Product_collections from "../shopdata.json";
import { useEffect } from "react";
export const Product_Context = createContext({
  productCollections: [],
  setProductCollections: () => {},
});

export const Product_context_Provider = ({ children }) => {
  const [productCollections, setProductCollections] =
    useState(Product_collections);

  const value = {
    productCollections,
    setProductCollections,
  };
  return (
    <Product_Context.Provider value={value}>
      {children}
    </Product_Context.Provider>
  );
};

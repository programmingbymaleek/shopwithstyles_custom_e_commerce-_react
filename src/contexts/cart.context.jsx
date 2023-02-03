import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToadd) => {
  const isItemAlreadyinCart = cartItems.find(
    (cartItem) =>
      cartItem.id === productToadd.id && cartItem.size === productToadd.size
  );

  if (isItemAlreadyinCart) {
    return cartItems.map((cartItem) => {
      return cartItem.size === productToadd.size
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem;
    });
  }
  //use statechange to change sizes
  return [...cartItems, { ...productToadd }];
};

const deletItem = (cartItems, product_To_Delete_id) => {
  cartItems.filter((cartItem) => {
    return cartItem.id !== product_To_Delete_id;
  });
};
export const CreateCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteCartItem: () => {},
  total: 0,
});
export const CartContextProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(cartItems);

  //counting item in the added to the cart..

  useEffect(() => {
    setCartCount(
      cartItems.reduce((accumulator, current) => {
        return accumulator + current.quantity;
      }, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setTotal(
      cartItems.reduce((accumulator, current) => {
        return accumulator + current.quantity * current.price;
      }, 0)
    );
  }, [cartCount]);

  const addItemToCart = (productToadd) => {
    console.log(productToadd);
    setCartItem(addCartItem(cartItems, productToadd));
  };

  const deleteCartItem = (product_To_Delete_id) => {
    setCartItem(deletItem(cartItems, product_To_Delete_id));
  };

  const value = {
    toggleCart,
    setToggleCart,
    addItemToCart,
    cartItems,
    cartCount,
    deleteCartItem,
    total,
  };

  return (
    <CreateCartContext.Provider value={value}>
      {children}
    </CreateCartContext.Provider>
  );
};

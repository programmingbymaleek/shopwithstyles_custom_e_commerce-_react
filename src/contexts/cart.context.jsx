import { createContext, useState } from "react";

const addCartItem = (cartItems, productToadd) => {
  console.log(productToadd);
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
export const CreateCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
});
export const CartContextProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  console.log(cartItems);

  const addItemToCart = (productToadd) => {
    console.log(productToadd);
    setCartItem(addCartItem(cartItems, productToadd));
  };

  const value = { toggleCart, setToggleCart, addItemToCart, cartItems };

  return (
    <CreateCartContext.Provider value={value}>
      {children}
    </CreateCartContext.Provider>
  );
};

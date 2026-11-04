import { createContext, useState } from "react";

export const CartContext = createContext(); //step 1

//step 2
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i,
        );
      }
      return [...prev, { ...product, quantity: 1 }]; //appending the new product in state
    });
  };

  const removeFromCart = (productId) => {
    const remainingItems = cart.filter((i) => i.id !== productId); //get all other items
    setCart(remainingItems); // reset with remaining items in state
  };

  const incrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === productId
          ? { ...i, quantity: Math.min((i.quantity || 1) + 1, i.stock) }
          : i,
      ),
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === productId
          ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 1) }
          : i,
      ),
    );
  };

  const clearCart = () => {
    setCart([]); //reset the state to empty
  };

  const isInCart = (productId) => {
    return cart.find((i) => i.id === productId);
  };

  const cartLength = cart.length;

  return (
    <CartContext
      value={{
        cart,
        cartLength,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext>
  );
};
export default CartProvider;

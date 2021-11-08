export const addItemToCart = (cart, cartItemToAdd) => {
  const existingCartItem = cart.find((item) => cartItemToAdd._id === item._id);

  if (existingCartItem) {
    return cart.map((item) =>
      item._id === cartItemToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cart, { ...cartItemToAdd, quantity: 1 }];
};

export const computePriceWithQuantity = (item) => {
  const { price, quantity } = item;

  return (price * quantity).toFixed(2);
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => cartItemToRemove._id === item._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item._id !== cartItemToRemove._id);
  }
  return cartItems.map((item) =>
    item._id === cartItemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

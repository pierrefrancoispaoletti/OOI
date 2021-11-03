export const addItemToCart = (cart, cartItemToAdd) => {
  console.log(cartItemToAdd.id);
  const existingCartItem = cart.find((item) => cartItemToAdd.id === item.id);

  if (existingCartItem) {
    return cart.map((item) =>
      item.id === cartItemToAdd.id
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
    (item) => cartItemToRemove.id === item.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

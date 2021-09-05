export const addToCart = (data) => {
  return {
    type: "ADDTOCART",
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: "REMOVEFROMCART",
    payload: data,
  };
};

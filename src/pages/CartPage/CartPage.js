import React from "react";

const Cartpage = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Cartpage;

import React from "react";
import { connect } from "react-redux";

const Cartpage = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cartpage);

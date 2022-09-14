import React from "react";
import { connect } from "react-redux";

function ProductList(props) {
  return <div>ProductList</div>;
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.mobile.cartCount,
  };
};

export default connect(mapStateToProps)(ProductList);

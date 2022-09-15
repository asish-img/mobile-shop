import { Grid } from "@material-ui/core";
import React from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProductListing } from "../apiHelpers/products";
import Card from "../components/Card";
import { setProducts } from "../redux/mobile/actions";
import { useStyle } from "./styles";

function ProductList(props) {
  const classes = useStyle();
  const { products, search } = props;
  const navigate = useNavigate();
  const fetchData = async () => {
    const result = await getProductListing();

    props.setProducts_(result);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const handleRoute = (item) => {
    navigate(`/${item.id}`, { state: { item } });
  };

  return (
    <div className={classes.main}>
      <Grid container spacing={3}>
        {products.find((item) => {
          return item.model.toLowerCase().includes(search.toLowerCase());
        }) ? (
          products
            .filter((item) => {
              return item.model.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                onClick={() => {
                  handleRoute(item);
                }}
                style={{ cursor: "pointer" }}
              >
                <Card item={item} />
              </Grid>
            ))
        ) : (
          <h3 style={{ margin: "auto" }}>No data found</h3>
        )}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.mobile.cartCount,
    products: state.mobile.products,
    search: state.mobile.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setProducts_: (data) => dispatch(setProducts(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

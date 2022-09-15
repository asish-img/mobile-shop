import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import InputBase from "@material-ui/core/InputBase";
import { useStyle } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import { setSearch } from "../redux/mobile/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const classes = useStyle();
  const params = useLocation();
  const navigate = useNavigate();
  const { setSearch_ } = props;
  useEffect(() => {
    setSearch_("");
  }, []);

  return (
    <>
      <Navbar color="secondary" dark fixed="top">
        <NavbarBrand
          onClick={() => {
            navigate("/");
          }}
          className={classes.logo}
        >
          Mobile Shop
        </NavbarBrand>

        {params?.pathname !== "/" ? (
          <span>
            <Link to="/">Home</Link>
            {params?.pathname}
          </span>
        ) : null}

        <div style={{ display: "flex", gap: "20px" }}>
          {params?.pathname === "/" ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearch_(e.target.value)}
              />
            </div>
          ) : null}
          <div className={classes.cartCount}>
            <h5 className={classes.count}>{props.cartCount}</h5>
          </div>
        </div>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state.mobile);
  return {
    cartCount: state.mobile.cartCount,
    products: state.mobile.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearch_: (data) => dispatch(setSearch(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

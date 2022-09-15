import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    image: {
      display: "block",
      margin: "auto",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      paddingLeft: "50px !important",
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),

      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    logo: {
      cursor: "pointer",
    },
    cartCount: {
      width: 30,
      height: 30,
      borderRadius: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "red",
    },
    count: {
      color: "white",
      margin: 0,
    },
  };
});

export { useStyle };

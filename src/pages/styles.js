import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((props) => {
  return {
    main: {
      padding: "2rem",
      marginTop: "60px",
    },
    detailImage: {
      width: 200,
    },
    gridItems: {
      margin: "4rem",
      justifyContent: "center",
      marginLeft: "auto",
    },
  };
});

export { useStyle };

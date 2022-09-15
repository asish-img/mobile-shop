import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { CircularProgress, Grid } from "@material-ui/core";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useStyle } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { addProduct, getProductDetail } from "../apiHelpers/products";
import { toast } from "react-toastify";
import { updateCount } from "../redux/mobile/actions";
import { connect } from "react-redux";
function ProductDetail(props) {
  const { id } = useParams();
  const { updateCount_ } = props;
  const navigate = useNavigate();

  const classes = useStyle();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const handleBack = () => {
    navigate("/");
  };

  const handleColor = (id) => {
    setColor(id);
  };

  const handleStorage = (id) => {
    setStorage(id);
  };

  const handleAdd = async () => {
    const response = await addProduct(id, color, storage);
    response && updateCount_(response.count);
    response && toast.success("product added");
    response && navigate("/");
  };

  const fetchData = async () => {
    const result = await getProductDetail(id);
    setDetail(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (detail?.options?.colors.length == 1) {
      setColor(detail?.options?.colors[0].code);
    }
    if (detail?.options?.storages.length == 1) {
      setStorage(detail?.options?.storages[0].code);
    }
  }, [detail]);

  return (
    <div style={{ marginTop: "60px" }}>
      <ArrowBackIcon
        style={{ margin: 20, cursor: "pointer" }}
        onClick={handleBack}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid xs={12} md={3} className={classes.gridItems}>
            <Card outline={false} style={{ border: "none" }}>
              <img
                alt="Card"
                src={detail?.imgUrl}
                className={classes.detailImage}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card className={classes.gridItems} style={{ padding: 10 }}>
              <CardTitle style={{ fontWeight: "bold" }}>DESCRIPTION</CardTitle>
              <ListGroup flush>
                <ListGroupItem>Brand : {detail?.brand} </ListGroupItem>
                <ListGroupItem>Model : {detail?.model}</ListGroupItem>
                <ListGroupItem>Price : {detail?.price}</ListGroupItem>
                <ListGroupItem>CPU : {detail?.cpu}</ListGroupItem>
                <ListGroupItem>RAM : {detail?.ram}</ListGroupItem>
                <ListGroupItem>Operating System : {detail?.os}</ListGroupItem>
                <ListGroupItem>
                  Screen Resolution : {detail?.displayResolution}
                </ListGroupItem>

                <ListGroupItem>
                  Cameras : {detail?.primaryCamera} | {detail?.primaryCamera}{" "}
                </ListGroupItem>
                <ListGroupItem>Dimensions : {detail?.dimentions}</ListGroupItem>
                <ListGroupItem>Weight : {detail?.weight}</ListGroupItem>
              </ListGroup>
            </Card>

            <Card className={classes.gridItems} style={{ padding: 10 }}>
              <CardTitle style={{ fontWeight: "bold" }}>Action</CardTitle>

              <div style={{ display: "flex", marginBottom: 10 }}>
                {detail.options.colors.map((item) => (
                  <Card
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      color: color === item.code ? "white" : "black",
                    }}
                    color={color === item.code && "primary"}
                    onClick={() => handleColor(item.code)}
                  >
                    <CardBody>{item.name}</CardBody>{" "}
                  </Card>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                {detail.options.storages.map((item) => (
                  <Card
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      color: storage === item.code ? "white" : "black",
                    }}
                    onClick={() => handleStorage(item.code)}
                    color={storage === item.code && "primary"}
                  >
                    <CardBody>{item.name}</CardBody>{" "}
                  </Card>
                ))}
              </div>
            </Card>

            <Button color="primary" onClick={handleAdd}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCount_: (data) => dispatch(updateCount(data)),
  };
};
export default connect(() => {}, mapDispatchToProps)(ProductDetail);

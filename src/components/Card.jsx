import React from "react";
import {
  CardBody,
  Card as RCard,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useStyle } from "./style";

function Card({ item }) {
  const { model, imgUrl, price, brand, id } = item;
  const classes = useStyle();
  return (
    <RCard color="light">
      <CardBody>
        <img alt="Card" src={imgUrl} className={classes.image} />
        <CardBody>
          <CardTitle tag="h5">{model}</CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>Brand : {brand}</ListGroupItem>
          <ListGroupItem>Price : {price}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </RCard>
  );
}

export default Card;

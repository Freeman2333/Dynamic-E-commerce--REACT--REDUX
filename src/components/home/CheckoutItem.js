import React from "react";
import { removeRow } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";

function CheckoutItem(props) {
  const product = props.data;
  const dispatch = useDispatch();
  const basketAmount = useSelector(state => state.basket.unitArray);

  const handelRemoveRoe = () => {
    dispatch(removeRow(product));
  };

  return (
    <>
      <ListGroup.Item style={listItem}>
        <p>
          {product.purchasedUnits}st : {product.name} - {product.price}kr
        </p>
        <Button
          variant="outline-danger"
          onClick={handelRemoveRoe}
          disabled={basketAmount.length > 1 ? false : true}
        >
          Remove all {product.name}
        </Button>
      </ListGroup.Item>
    </>
  );
}

const listItem = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};

export default CheckoutItem;

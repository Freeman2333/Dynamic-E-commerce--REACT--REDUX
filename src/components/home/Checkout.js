import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../redux";
import { Container, Card, ListGroup } from "react-bootstrap";
import CheckoutItem from "./CheckoutItem";
import ResetButton from "../button/ResetBtn";
import PurchaseButton from "../button/PurchaseBtn";
import BackHomeBtn from "../button/BackHomeBtn";
import Alerts from "../Alerts";

function Checkout() {
  const dispatch = useDispatch();
  const completeOrder = useSelector(state => state.basket);
  const stateBasket = completeOrder.unitArray;
  const browserBasket = JSON.parse(localStorage.getItem("Basket"));
  const emtyBasketText = "No items are in the basket yet ...";

  useEffect(() => {
    if (
      browserBasket !== null &&
      browserBasket.unitArray.length !== 0 &&
      stateBasket.length === 0
    ) {
      browserBasket.unitArray.forEach(el => {
        dispatch(addToBasket(el, el.purchasedUnits));
      });
    }
  }, [browserBasket]);

  return (
    <Container>
      <Card className="text-center mt-4">
        <Card.Header>BASKET</Card.Header>
        <Card.Body style={cardBody}>
          {completeOrder.numberOfUnits === 0 ? (
            <Alerts mess={emtyBasketText} />
          ) : (
            <ListGroup variant="flush">
              <ListGroup.Item variant="light" style={listItem}>
                Sum of items: {completeOrder.numberOfUnits}
              </ListGroup.Item>
              {stateBasket.map((p, i) => (
                <CheckoutItem key={i} data={p} />
              ))}
              <BackHomeBtn />
              <PurchaseButton />
              <ResetButton />
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

const cardBody = {
  minHeight: "500px"
};

const listItem = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};

export default Checkout;

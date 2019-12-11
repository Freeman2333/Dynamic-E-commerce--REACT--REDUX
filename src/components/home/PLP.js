import React, { useState }  from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProductStock, addToBasket, addToBasketItem} from "../../redux";
import PDP from "./PDP";

function PLP(props) { 
  const dispatch = useDispatch();
  const basketList = useSelector(state => state.basket);  
  const item = props.product;  
 
  function handelDispatch(item) {
    dispatch(decreaseProductStock(item))  
    item.purchasedUnits++;

    if(basketList.unitArray.includes(item)){ 
      dispatch(addToBasketItem(item, item.SKU))    
    }else {  
      dispatch(addToBasket(item))   
    } 
  }  

  return (
    <Card className="text-center p-0 mt-4" style={{ width: "100%" }}>
      <Card.Img variant="top" style={imgCard} src={item.img} />
      <Card.Header>{item.name}</Card.Header>
      <Card.Body style={cardBody}>
        <Card.Text>
          We have <b>{item.stock}</b> items of <b>{item.name}</b> in stock for <b>{item.price} kr</b> a piece. 
        </Card.Text>
        <small>{item.comment}</small> 
        <ButtonGroup className="d-flex flex-column mt-4" aria-label="Basic example">
          <Button
            className="font-weight-bold"
            variant="info"
            disabled= {item.stock === 0 ? true : false }
            onClick={() => handelDispatch(item)}
          >
            Buy a {item.name}
          </Button> 
          <PDP info={item}/>
        </ButtonGroup>       
      </Card.Body>
    </Card>
  );
}

const imgCard = {
  height: "200px",
  minWidth: "200px",
  objectFit: "cover"
};

const cardBody = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between"
};

export default PLP;

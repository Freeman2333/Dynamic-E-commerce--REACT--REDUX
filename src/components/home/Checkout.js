import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Container, Card, Alert, ListGroup, Button} from 'react-bootstrap';  
import CheckoutItem from './CheckoutItem';
import { resetBasket } from '../../redux';

function Checkout() {   
    const dispatch = useDispatch(); 
    const completeOrder = useSelector(state => state.basket);    
    const url = 'https://jsonplaceholder.typicode.com/users';    

    console.log(completeOrder)

    const handelPurchase = () => {  
        fetch(url, {  
            method: 'POST',  
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({completeOrder})
        }) 
        .then((res) => res.json())
        .then((json) => {
           console.log('Success', json);
        })
        .catch (err => {
            alert('An error has occured: '+ err.message);
        })
    }
 
    return ( 
        <Container>
            <Card className="text-center mt-4"> 
                <Card.Header>BASKET</Card.Header>
                <Card.Body style={cardBody}> 
                    {(completeOrder.numberOfUnits === 0) ?
                        <Alert variant="light">No items are in the basket yet ...</Alert> :
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="light" style={listItem}>
                                Sum of items: {completeOrder.numberOfUnits}
                            </ListGroup.Item>
                            {    
                                completeOrder.unitArray.map((product, i) => (   
                                   <CheckoutItem key={i} data={product}/>
                                )) 
                            } 
                            <Button className="d-flex justify-content-center col-12 m-2" variant="warning" onClick={() => dispatch(resetBasket())}>Reset</Button>
                            <Button className="d-flex justify-content-center col-12 m-2" variant="danger" onClick={handelPurchase}>Buy</Button>
                        </ListGroup>   
                    }    
                </Card.Body>  
            </Card>  
        </Container>
    )
}

const cardBody = {
    minHeight: '500px'
}

const listItem = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export default Checkout;

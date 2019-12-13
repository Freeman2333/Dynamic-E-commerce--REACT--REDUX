import React, { useEffect }  from 'react'; 
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { Container, Card, Alert, ListGroup, Button} from 'react-bootstrap';  
import CheckoutItem from './CheckoutItem';
import { resetBasket, addToBasket } from '../../redux';

function Checkout() {   
    const dispatch = useDispatch(); 
    const completeOrder = useSelector(state => state.basket);  
    const list = JSON.parse(localStorage.getItem("Basket"))  
    const url = 'https://jsonplaceholder.typicode.com/users';   
  
    const handelReset = () => {  
        localStorage.removeItem('Basket')
        dispatch(resetBasket())
    }

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

    useEffect(() => {   
        if (list !== null && completeOrder.unitArray.length === 0 && list.unitArray.length !== 0) {      
          list.unitArray.forEach(prevProduct => {     
            dispatch(addToBasket(prevProduct, prevProduct.purchasedUnits))  
          }); 
        }     
      }, []);
 
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
                            <Button className="d-flex justify-content-center col-12 m-2" 
                                variant="warning" 
                                onClick={handelReset}>
                                    Reset
                            </Button>
                            <Button className="d-flex justify-content-center col-12 m-2" 
                                variant="danger" 
                                onClick={handelPurchase}>
                                    Buy
                            </Button>
                            <Button className="d-flex justify-content-center col-12 m-2" 
                                variant="light">
                                    <NavLink className="text-decoration-none text-dark" 
                                        to="/"> 
                                            Continue Shopping 
                                    </NavLink> 
                            </Button> 
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

import React from 'react';  
import { ListGroup } from 'react-bootstrap';   

function CheckoutItem(props) {   

    return ( 
        <>
            <ListGroup.Item style={listItem}>
                <p>{props.data.purchasedUnits}st : {props.data.name} - {props.data.price}kr </p> 
            </ListGroup.Item> 
        </>
    )
}

const listItem = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export default CheckoutItem;

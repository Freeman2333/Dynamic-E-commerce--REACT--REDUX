import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux";
import { Container, Col } from "react-bootstrap"; 
import { addToBasket} from "../../redux";
import Products from "../../data/products.json";
import PLP from "./PLP"; 

const Home = () => {
  const dispatch = useDispatch();   
  const basket = useSelector(state => state.basket);  
  const productList = useSelector(state => state.productList);  
  const list = JSON.parse(localStorage.getItem("Basket"))

  console.log('basket',basket)

  const fetchedProducts = Products.products; 
  const products = productList.productArray;
  const productVariationAmount = productList.numberOfProducts;  

  useEffect(() => {  
    if(products.length === 0){
      fetchedProducts.forEach(p => {
        dispatch(addProduct(p));
      });  
    }
            
    if (list !== null && basket.unitArray.length === 0 && list.unitArray.length !== 0) {      
      list.unitArray.forEach(prevProduct => {     
        dispatch(addToBasket(prevProduct, prevProduct.purchasedUnits))  
      }); 
    }

    console.clear()  
  }, [ fetchedProducts, dispatch ]);
 
  return ( 
      <Container className="d-flex justify-content-between flex-wrap">
        <Col xs={12} className="d-flex justify-content-center mt-4 bg-white">
          <h3>
            Choose between our <b>{productVariationAmount}</b> diffrent treats!{" "}
          </h3>
        </Col>
        {products.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="d-flex">
            <PLP
              xs={12}
              sm={6}
              md={4}
              className="d-flex"
              key={item.SKU}
              product={item}
            /> 
          </Col>
        ))}  
      </Container> 
  );
};

export default Home;

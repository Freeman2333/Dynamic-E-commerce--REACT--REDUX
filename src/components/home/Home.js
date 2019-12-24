import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux";
import { Container, Col } from "react-bootstrap";
import Goods from "../../data/products.json";
import Loader from "../Loader";
import PLP from "./PLP";

const Home = () => { 
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const products = productList.productArray;
  const [spinner, setSpinner] = useState(true); 
  const loadData = JSON.parse(JSON.stringify(Goods));

  useEffect(() => {  

    if (products.length === 0) {    
      loadData.productData.forEach(p => { 
          dispatch(addProduct(p)); 
          
      }, setTimeout(() => {
          /** 
           * "setTimeout" is only use to emphasise the impact of the loader. 
           * This callback works without as well. 
           */
          setSpinner(false);
          console.clear();
        }, 3000));   
    }  
  }, []);

  return (
    <Fragment> 
      <Loader show={spinner} />
      <Container className="d-flex justify-content-between flex-wrap">
        <Col xs={12} className="d-flex justify-content-center mt-4 bg-white">
          <h3>
            Choose between our <b>{productList.numberOfProducts}</b> diffrent
            treats!
          </h3>
        </Col>
        {products.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="d-flex">
            <PLP key={item.SKU} className="d-flex" product={item} />
          </Col>
        ))}
      </Container>
    </Fragment>
  );
};

export default Home;

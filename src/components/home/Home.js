import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux";
import { Container, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import Products from "../../data/products.json";
import PLP from "./PLP";

const Home = () => {
  const dispatch = useDispatch();  

  const productStateList = useSelector(
    state => state.productList.productArray
  );

  const productVariationAmount = useSelector(
    state => state.productList.numberOfProducts
  );  

  const fetchedProducts = Products.products;
 
  useEffect(() => { 
    fetchedProducts.forEach(p => {
      dispatch(addProduct(p));
    });   
  }, []);
 
  return (
    <Animated animationIn="pulse">
      <Container className="d-flex justify-content-between flex-wrap">
        <Col xs={12} className="d-flex justify-content-center mt-4 bg-white">
          <h3>
            Choose between our <b>{productVariationAmount}</b> diffrent treats!{" "}
          </h3>
        </Col>
        {productStateList.map((item, i) => (
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
    </Animated>
  );
};

export default Home;

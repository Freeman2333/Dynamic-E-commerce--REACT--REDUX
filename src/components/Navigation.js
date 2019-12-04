import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Badge } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";

 const Navigation = () => {  

  const purchaseAmount = useSelector(
    state => state.basket.numberOfUnits
  );  

  return (
    <Navbar
      className="d-flex flex-wrap justify-content-between"
      bg="light"
      style={{ minHeight: "70px" }}
    >
      <Animated animationIn="slideInDown">
        <h3 className="font-weight-bold">Online Bakery</h3>
      </Animated>

      <Animated animationIn="slideInDown">
        <NavLink className="text-dark text-decoration-none pr-3" to="/">
          Home
        </NavLink>
        <NavLink className="text-dark text-decoration-none pr-3" to="/about">
          About
        </NavLink>
        <NavLink className="text-dark text-decoration-none pr-3" to="/contact">
          Contact
        </NavLink>
        <NavLink className="text-dark text-decoration-none pr-3" to="/checkout">
          <i
            className="fa fa-lg fa-shopping-cart"
            style={{ color: "darkcyan" }}
          ></i>
          <Badge pill variant="info">
           {purchaseAmount}
          </Badge>
        </NavLink>
      </Animated>
    </Navbar>
  );
};

export default Navigation;

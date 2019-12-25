import React from "react";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import { Navbar, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navigation = () => {
  const stateBasket = useSelector(state => state.basket);

  return (
    <Navbar
      className="d-flex flex-wrap justify-content-between"
      bg="light"
      style={navbar}
    >
      <Animated animationIn="slideInDown" className="d-flex">
        <NavLink className="text-dark text-decoration-none pr-3" to="/">
          <h3 className="font-weight-bold">Online Bakery</h3>
        </NavLink>
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
            {stateBasket.numberOfUnits}
          </Badge>
        </NavLink>
      </Animated>
    </Navbar>
  );
};

const navbar = {
  position: "fixed",
  top: 0,
  left: 0, 
  width: "100%",
  minHeight: "100px",
  zIndex: "15",
  boxShadow: "5px 5px 5px rgba(68,68,68,0.6)"
}

export default Navigation;

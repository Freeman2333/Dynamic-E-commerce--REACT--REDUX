import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";

function Loader(props) {
  return (
    <Fragment>
      {props.show ? (
        <div style={overlay} className="align-content-center">
          <Spinner style={loader} animation="border" variant="info" size="lg" />
        </div>
      ) : null}
    </Fragment>
  );
}

const overlay = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  minHeight: "2000px",
  background: "black",
  opacity: 0.7,
  zIndex: 11
};

const loader = {
  zIndex: 12,
  height: "100px",
  width: "100px"
};

export default Loader;

import React from "react";
import { Animated } from "react-animated-css";
import { Container, Table } from "react-bootstrap";
import BackHomeBtn from "./button/BackHomeBtn";

const Contact = () => {
  return (
    <Container style={contact}>
      <h5 className="p-4 text-center">Contact Information</h5>
      <Animated animationIn="pulse">
        <Table className="pt-4" hover>
          <thead>
            <tr>
              <th style={cell} className="bg-light">
                Phone
              </th>
              <th style={cell}>Adress</th>
              <th style={cell} className="bg-light">
                Online
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell} className="bg-light">
                070 - 111 222 333
              </td>
              <td style={cell}>Vägensvägar 33</td>
              <td style={cell} className="bg-light">
                1hallo@world.com
              </td>
            </tr>
            <tr>
              <td style={cell} className="bg-light">
                070 - 111 222 334
              </td>
              <td style={cell}>12 345</td>
              <td style={cell} className="bg-light">
                2hallo@world.com
              </td>
            </tr>
            <tr>
              <td style={cell} className="bg-light">
                070 - 111 222 334
              </td>
              <td style={cell}>Orten</td>
              <td style={cell} className="bg-light">
                3hallo@world.com
              </td>
            </tr>
          </tbody>
        </Table>
      </Animated>
      <BackHomeBtn />
    </Container>
  );
};

const contact = {
  height: "700px"
};

const cell = {
  wordBreak: "break-all"
};

export default Contact;

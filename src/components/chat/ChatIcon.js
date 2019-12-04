import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; 
import ChatBoot from "./ChatBoot"; 

function ChatIcon() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
      <div className="d-flex justify-content-end m-4">  
        <button  className="p-4 rounded-circle bg-info shadow" style={chatPosition} onClick={handleShow}>
          <i className="fas fa-lg fa-comments text-white"></i>
        </button> 
      </div> 

      <Modal show={show}>
          <Button
              variant="light"
              className="rounded-circle"
              style={btnStyle}
              onClick={handleClose}
          >
              X
          </Button>
          <ChatBoot/>
      </Modal>  
    </>
  )
}

const chatPosition = {
  position: "fixed",
  bottom: "20px",
  zIndex: 10
};

const btnStyle = {
  position: "absolute",
  zIndex: "1000",
  margin: "10px",
  right: "15%",
  outline: 'none'
};

export default ChatIcon;

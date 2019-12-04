import React from "react";
import ChatBot from "react-simple-chatbot";  
import "../../index.css"; 

function ChatRoom() {  
  return (  
          <ChatBot
          className="d-flex justify-content-center"
          steps={[
            {
              id: "1",
              message: "Hallo there! How are u doing today?",   
              trigger: "2"
            },
            {
              id: "2",
              options: [
                { value: 1, label: "Good", trigger: "4" },
                { value: 2, label: "Kinda good", trigger: "4" },
                { value: 3, label: "Could be better", trigger: "3" }
              ]
            },
            {
              id: "3",
              message:
                "That is sad to hear! Don`t forget that you do not live a positive life with negative thoughts",
              trigger: "2"
            },
            {
              id: "4",
              message: "Great to hear! Have a good day!",
              end: true
            }
          ]}
        />  
  );
}

export default ChatRoom;

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Carousels from "./components/Carousels";
import Home from "./components/home/Home";
import Checkout from "./components/home/Checkout";
import ChatIcon from "./components/chat/ChatIcon";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
        <Carousels/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={Checkout} />
          <Route component={Error} />
        </Switch>
        <Footer/>
        <ChatIcon/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

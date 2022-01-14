import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Clients from "./pages/Clients";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/clients" component={ Clients } />
          <Route path="/registration" component={ Registration } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

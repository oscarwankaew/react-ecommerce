import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/customers" exact component={CustomerList} />
        <Route path="/cart" exact component={ShoppingCart} />
      </BrowserRouter>
    );
  } 
}

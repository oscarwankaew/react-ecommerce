import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import { Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <NavBar />
        <Routes path="/" exact component={Login} />
        <Routes path="/dashboard" exact component={Dashboard} />
        <Routes path="/customers" exact component={CustomerList} />
        <Routes path="/cart" exact component={ShoppingCart} />
      </BrowserRouter>
    );
  } 
}

import React, { Component } from "react";
 import NavBar from "./NavBar";
 import Dashboard from "./Dashboard";
 import Login from "./Login";
 import ShoppingCart from "./ShoppingCart";
 import CustomerList from "./CustomerList";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import NoMatchPage from "./NoMatchPage";

 export default class App extends Component {
   render() {
     return (
       <Router>
         <NavBar />
         <div className="container-fluid">
           <Routes>
             <Route path="/" exact component={Login} />
             <Route path="/dashboard" exact component={Dashboard} />
             <Route path="/customers" exact component={CustomerList} />
             <Route path="/cart" exact component={ShoppingCart} />
             <Route path="*" component={NoMatchPage} />
           </Routes>
         </div>
       </Router>
     );
   }
 }


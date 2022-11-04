import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

export default class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavBar />
        <Dashboard></Dashboard>
      </React.Fragment>
    );
  } 
}

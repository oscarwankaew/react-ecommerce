import React, { Component } from "react";

class NavBar extends Component{
  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-stlye">
          <a className="navbar-brand" href="/">TechStop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Dashboard</a>
              </li>
            </ul>
    
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
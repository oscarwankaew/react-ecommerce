import React, { Component } from "react";

export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = { email: "", password: ""};
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 boarder-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input 
            type="text" 
            className="form-control" 
            value={this.state.email}
            onChange={(event) => { 
              this.setState({ email: event.target.value });
            }} 
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input 
            type="password" 
            className="form-control" 
            value={this.state.password}
            onChange={(event) => { 
              this.setState({ password: event.target.value });
            }} 
          />
        </div>
        {/* Password ends */}

        <div className="text-right">
          {this.state.message} 
          <button className="btn btn-primary" onClick={this.onLoginClick}>Login </button>
        </div>


      </div>
    );
  }

  onLoginClick = () => {
    console.log(this.state)
    if (this.state.email === "admin@test.com" && this.state.password === "123456")
    {
      this.setState({
        message: <span className="text-success">Successfully logged-in</span>
      });
    } else {
      this.setState({
        message: <span className="text-danger">Invalid login, please try again</span>
      }); 
    }
  }
}
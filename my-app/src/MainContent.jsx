import React, { Component} from "react";
export default class MainContent extends Component{

  state = {
    pageTitle: "Customers", 
    customersCount: 5,
    customers:[
      {id: 1, name: "Oscar", phone: "444-1100", address: { state: "Illinois"}},
      {id: 2, name: "Giulianna", phone: "333-0022", address: { state: "Arizona"}},
      {id: 3, name: "Hazel", phone: "222-6654", address: { state: "Colorado"}},
      {id: 4, name: "Ellie", phone: "888-9876", address: { state: "California"}},
      {id: 5, name: "John", phone: null, address: { state: "Texas"}},
    ],
  };

 render(){
   return(
      <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}<span className="badge bg-secondary m-2">{this.state.customersCount}</span>
        <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button></h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => {
                return(
                  <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{this.getPhoneToRender(customer.phone)}</td>
                  <td>{customer.address.state}</td>
                </tr>
              );
            })}
           
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  }

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  }
}
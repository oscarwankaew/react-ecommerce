import React, { Component } from "react";
export default class Products extends Component
{
  state = {
    product: this.props.product
  };

  render(){
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># {this.state.product.id}</div>
            <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
            <div>$ {this.state.product.price}</div>
          </div>
          <div className="text-end me-2">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import Products from "./Products";
export default class ShoppingCart extends Component {

  state = { 
    products: [ 
    {id: 1, productName: "iPhone 14", price: 1500, quantity: 0}, 
    {id: 2, productName: "LG TV", price: 4500, quantity: 0},
    {id: 3, productName: "Samsung TV", price: 500, quantity: 0},
    {id: 4, productName: "MacBook Pro", price: 2000, quantity: 0},
    {id: 5, productName: "PS5", price: 3000, quantity: 0},
    {id: 6, productName: "Xbox 1", price: 3000, quantity: 0},
  ],
  };
  
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return(
            <Products 
            key={product.id} 
            id={product.id} 
            productName={product.productName} 
            price={product.price} 
            quantity={product.quantity} 
            />
            );
          })}
        </div>
      </div>
    );
  }
}
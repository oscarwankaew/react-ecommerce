import React, { Component } from "react";
import Products from "./Products";
export default class ShoppingCart extends Component {

  constructor(props) {
    console.log("constructor - ShoppingCart")
    super(props);
    this.state = { 
      products: [ 
        {id: 1, productName: "iPhone 14", price: 1500, quantity: 0}, 
        {id: 2, productName: "LG TV", price: 4500, quantity: 0},
        {id: 3, productName: "Samsung TV", price: 500, quantity: 0},
        {id: 4, productName: "MacBook Pro", price: 2000, quantity: 0},
        {id: 5, productName: "PS5", price: 3000, quantity: 0},
        {id: 6, productName: "Xbox 1", price: 3000, quantity: 0},
      ],
    };
  }

  
  
  render() {
    console.log("render - ShoppingCart")
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((item) => {
            return(
            <Products 
            key={item.id} 
            product={item}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            >
              <button className="btn btn-primary">Buy Now</button>
            </Products>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount - ShoppingCart")

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate - ShoppingCart", prevProps, prevState, this.props, this.state)
  }

  handleIncrement = (product, maxValue) => {
  
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      
      this.setState({products: allProducts});
    } 
    
    // console.log("handleIncrement", product);
    // console.log(allProducts[index]);
  };

  handleDecrement = (product, miniValue) => {
    
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    
    if (allProducts[index].quantity > miniValue) {
      allProducts[index].quantity--;

    this.setState({products: allProducts});
    }
    
    // console.log("handleDecrement", product);
    // console.log(allProducts[index]);
  };

  handleDelete = (product) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure?")) {
      // delete product based on index
      allProducts.splice(index, 1);

      // update the state of current component
      this.setState({products: allProducts});
    }
    
  }
}
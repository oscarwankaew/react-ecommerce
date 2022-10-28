import React, { Component } from "react";
import Products from "./Products";
export default class ShoppingCart extends Component {

  constructor(props) {
    // console.log("constructor - ShoppingCart");
    super(props);
    this.state = { 
      products: [],
    };
  }

  
  
  render() {
    // console.log("render - ShoppingCart");
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
    // console.log("componentDidMount - ShoppingCart");
    var promise = fetch("http://localhost:5000/products", { method: "GET"});
    promise.then((response) => {
      console.log(response);

      var promise2 = response.json();
      promise2.then((prods) => {
        console.log(prods);

        this.setState({ products: prods});
      });
    });

  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate - ShoppingCart", prevProps, prevState, this.props, this.state);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart", error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
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
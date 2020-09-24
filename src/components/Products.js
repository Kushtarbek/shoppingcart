import React, { Component } from 'react'
import formatCurrency from '../utils';

 class Products extends Component {
     constructor(props) {
         super(props);
         this.state = {
             product: null,
         };
     }
    render() {
    
        return (
            <div>
                <ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                    //   onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                      <div className="btn">
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button primary"
                      >
                        Add to Cart
                      </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
        )
    }
}

export default Products;

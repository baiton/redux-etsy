import React, {Component} from 'react';

class Product extends Component {
    render() {
        const product = this.props;
        // console.log("product.image", product);
        return (
            <li>
              <img src={product.image}></img>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
            </li>
        )
    }
}

export default Product;

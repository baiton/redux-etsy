import React, {Component} from 'react';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { filterProducts } from '../store/actions/actions'
import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const {products} = this.props;
        console.log("products", products);
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
              {products.map((productInfo) =>{
                return(
                  <Product
                    key={productInfo.listing_id}
                    {...productInfo}
                  />
                )
              })}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
function mapStateToProps(state) {
  console.log(state);
    return {products: state.products}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    filterProducts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

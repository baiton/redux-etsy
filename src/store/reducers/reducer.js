import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "../actions/actions";
import products from '../../data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
  products: products,

}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`


const reducer = function(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      // console.log("filtering!");
      let filteredSearch = products.filter((productInfo) => {
        if (productInfo.price < 20 && action.payload == "underTwenty"){
          // console.log("underTwenty");
        return true
      } else if (productInfo.price >= 20 && action.payload == "overTwenty"){
        // console.log("overTwenty");
        return true;
      } else if (action.payload == "all") {
        return true
      } else {
        // console.log("all");
        return false
      }
    })
    console.log("filteredSearch", filteredSearch);
      return {products: filteredSearch};
      break;
      default:
      return state
      break;
  }
    // When a `FILTER_PRODUCTS` is provided, return a new state
    // Be sure not to mutate state
    // Use the `update` operator provided by `immutability-helper`
    // to update the the state property describing current state of filterable data
    // provided by the `action.payload`
}

export default reducer;

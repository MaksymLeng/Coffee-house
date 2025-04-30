import React, {Component} from 'react';

import Home from "./js/pages/Home";
import { getBestProducts} from "./api/products";

class App extends Component{
  render() {
    const bestProducts = getBestProducts();
    // const products = getProducts();
    return (
      <div className="App">
          <Home products={bestProducts}/>
      </div>
    );
  }
}


export default App;

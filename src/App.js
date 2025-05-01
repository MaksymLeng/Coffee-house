import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./js/pages/Home";
import ForYourPleasure from "./js/pages/forYourPleasure";
import OurCoffee from "./js/pages/ourCoffee";
import { getBestProducts, getProducts} from "./api/products";

class App extends Component{
  render() {
    const bestProducts = getBestProducts();
    const products = getProducts();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home products={bestProducts}/>} />
                <Route path="/about" element={<OurCoffee products={products} />} />
                <Route path="/pleasure" element={<ForYourPleasure />} />
            </Routes>
        </Router>
    );
  }
}


export default App;

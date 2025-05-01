import {Component} from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import BeastCoffee from "../components/BeastCoffee";
import { getProducts} from "../../api/products";
import ContentSlider from "../components/ContentSlider";

import '../../styles/forYourPleasure/forYourPleasure.scss'

class ForYourPleasure extends Component {
    render() {
        const products = getProducts();
        return (
            <>
                <header className="forYourPleasure">
                    <Nav boolColor = {true}/>
                    <h1 className="forYourPleasure__title text-white text-lg font-bold">For your pleasure</h1>
                </header>
                <section className="slider__main">
                    <ContentSlider index={2}/>
                    <div className="slider__main__transition"></div>
                </section>
                <section className="buyingGoods">
                    <BeastCoffee products={products} mode={false}/>
                </section>
                <Footer/>
            </>
        )
    }
}

export default ForYourPleasure;
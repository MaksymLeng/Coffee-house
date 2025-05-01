import {Component} from "react";
import { withTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContentSlider from "../components/ContentSlider";
import BeastCoffee from "../components/BeastCoffee";

import '../../styles/ourCoffee/ourCoffee.scss'

class OurCoffee extends Component {
    render() {
        const {t, products} = this.props;
        return (
            <>
                <header className="ourCoffee">
                    <Nav boolColor = {true}/>
                    <h1 className="ourCoffee__title text-white text-lg font-bold">{t('ourCoffee.title')}</h1>
                </header>
                <section className="slider__main">
                    <ContentSlider index={1}/>
                    <div className="slider__main__transition"></div>
                </section>
                <section className="buyinGoods">
                    <div className="buyinGoods__content">
                        <div className="buyinGoods__filter">
                            <div className="buyinGoods__search">

                            </div>
                            <div className="buyinGoods__sort">

                            </div>
                        </div>
                        <BeastCoffee products = {products}/>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default withTranslation() (OurCoffee);
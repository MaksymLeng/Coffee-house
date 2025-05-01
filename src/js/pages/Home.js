import {Component} from 'react';
import { withTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Transitions from '../components/Transition';
import BeastCoffee from "../components/BeastCoffee";
import { getBestProducts} from "../../api/products";

import '../../styles/Home/Home.scss'

class Home extends Component {
    render() {
        const {t} = this.props;
        const products = getBestProducts();
        return (
            <>
                <header className="home">
                    <Nav boolColor = {true}/>
                    <div className='home__content'>
                        <h1 className="home__title text-white font-bold text-lg text-shadow">{t('home.title')}</h1>
                        <div className="home__decor"><Transitions boolColor = {true}/></div>
                        <h2 className="home__subtitle text-md text-white text-preline">{t('home.subtitle')}</h2>
                        <button className="home__btn text-sm font-bold text-white">{t('button.more')}</button>
                    </div>
                </header>
                <section className="aboutUs">
                    <div className="aboutUs__content">
                        <h2 className="aboutUs__title text-black text-md font-normal">{t('aboutUs.title')}</h2>
                        <div className="aboutUs__decor"><Transitions boolColor = {false}/></div>
                        <p className="aboutUs__text text-sm text-black text-preline">{t('aboutUs.text')}</p>
                    </div>
                </section>
                <section className="ourBest">
                    <div className="ourBest__content">
                        <h2 className="ourBest__title text-black text-md font-normal">{t('ourBest.title')}</h2>
                        <BeastCoffee products={products} mode={true}/>
                    </div>`
                </section>
                <Footer/>
            </>
        )
    }
}

export default withTranslation() (Home);
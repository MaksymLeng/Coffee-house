import {Component} from 'react';
import { withTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Transitions from '../components/Transition';
import BeastCoffee from "../components/BeastCoffee";

import '../../styles/Home/Home.scss'

class Home extends Component {
    render() {
        const {t, products} = this.props;
        return (
            <>
                <header className="home">
                    <Nav boolColor = {true}/>
                    <div className='home__content'>
                        <h1 className="home__title text-white font-bold text-lg text-shadow">{t('home.title')}</h1>
                        <Transitions boolColor = {true}/>
                        <h2 className="home__subtitle text-md text-white text-preline">{t('home.subtitle')}</h2>
                        <button className="home__btn text-sm font-bold text-white">{t('button.more')}</button>
                    </div>
                </header>
                <section className="about-us">
                    <div className="about-us__content">
                        <h2 className="about-us__title text-black text-md font-normal">{t('about.title')}</h2>
                        <Transitions boolColor = {false}/>
                        <p className="about-us__text text-sm text-black text-preline">{t('about.text')}</p>
                    </div>
                </section>
                <section className="our-best">
                    <div className="our-best__content">
                        <h2 className="our-best__title text-black text-md font-normal">{t('ourBest.title')}</h2>
                        <BeastCoffee products={products}/>
                    </div>`
                </section>
                <Footer/>
            </>
        )
    }
}

export default withTranslation() (Home);
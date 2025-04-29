import {Component} from 'react';
import { ReactComponent as WhiteCoffeeBean} from '../../assets/images/icons/coffee-beans white.svg';
import { ReactComponent as BlackCoffeeBean} from '../../assets/images/icons/coffee-beans black.svg';
import { withTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../../styles/Home/Home.scss'

class Home extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <header className="home">
                    <Nav/>
                    <div className='home__content'>
                        <h1 className="home__title text-white font-bold text-lg text-shadow">{t('home.title')}</h1>
                        <div className="home__transition">
                            <div className="home__line"></div>
                            <WhiteCoffeeBean className="home__icon" />
                            <div className="home__line"></div>
                        </div>
                        <h2 className="home__subtitle text-md text-white text-preline">{t('home.subtitle')}</h2>
                        <button className="home__btn text-sm font-bold text-white">{t('button.more')}</button>
                    </div>
                </header>
                <section className="about-us">
                    <div className="about-us__content">
                        <h2 className="about-us__title text-black text-md font-normal">{t('about.title')}</h2>
                        <div className="about-us__transition">
                            <div className="about-us__line"></div>
                            <BlackCoffeeBean className="about-us__icon" />
                            <div className="about-us__line"></div>
                        </div>
                        <p className="about-us__text text-sm text-black text-preline">{t('about.text')}</p>
                    </div>
                </section>
                <section className="home__section">

                </section>
                <Footer/>
            </>
        )
    }
}

export default withTranslation() (Home);
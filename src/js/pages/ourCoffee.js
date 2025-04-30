import {Component} from "react";
import { withTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Transitions from '../components/Transition';

import '../../styles/ourCoffee/ourCoffee.scss'

class OurCoffee extends Component {
    render() {
        const {t} = this.props;
        const coffeeGirl = new URL('../../assets/images/photo/girl-drink-coffee.jpg', import.meta.url).href;
        return (
            <>
                <header className="ourCoffee">
                    <Nav boolColor = {true}/>
                    <h1 className="ourCoffee__title text-white text-lg font-bold">{t('ourCoffee.title')}</h1>
                </header>
                <section className="aboutOurBeans">
                    <div className="aboutOurBeans__content">
                        <div className="aboutOurBeans__photo-grid">
                            <img src={coffeeGirl} alt="a girl drinking coffee in the sunset light" className="aboutOurBeans__photo"></img>
                        </div>
                        <div className="aboutOurBeans__text-grid">
                            <h2 className="aboutOurBeans__title text-black text-md font-normal">{t('aboutOurBeans.title')}</h2>
                            <div className="aboutOurBeans__decor"><Transitions boolColor = {false}/></div>
                            <p className="aboutOurBeans__text text-sm text-black font-normal text-preline">{t('aboutOurBeans.text')}</p>
                        </div>
                        <div className="aboutOurBeans__transition"></div>
                    </div>
                </section>
                <section className="buyinGoods">

                </section>
                <Footer/>
            </>
        )
    }
}

export default withTranslation() (OurCoffee);
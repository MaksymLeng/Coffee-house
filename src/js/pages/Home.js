import {Component} from 'react';
import { ReactComponent as LogoIcon} from '../../assets/images/icons/coffee-beans white.svg';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../../styles/Home/Home.scss'

class Home extends Component {
    render() {
        return (
            <>
                <header className="home">
                    <Nav/>
                    <div className='home__content'>
                        <h1 className="home__title">Everything You Love About Coffee</h1>
                        <div className="home__transition">
                            <div className="home__transition__line text-lg"></div>
                            <LogoIcon className="home__transition__icon"/>
                            <div className="home__transition__line"></div>
                        </div>
                        <h2 className="home__subtitle text-md text-white">We makes every day full of energy and taste<br/>Want to try our beans?</h2>
                    </div>
                </header>
                <section className="home__section">

                </section>
                <section className="home__section">

                </section>
                <Footer/>
            </>
        )
    }
}

export default Home;
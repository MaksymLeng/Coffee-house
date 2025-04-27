import {Component} from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../../styles/Home/Home.scss'

class Home extends Component {
    render() {
        return (
            <>
                <header className="home">
                    <Nav/>
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
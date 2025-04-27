import {Component} from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../../styles/forYourPleasure/forYourPleasure.scss'

class ForYourPleasure extends Component {
    render() {
        return (
            <>
                <header className="forYourPleasure">
                    <Nav/>
                </header>
                <section className="aboutOurGoods">

                </section>
                <Footer/>
            </>
        )
    }
}

export default ForYourPleasure;
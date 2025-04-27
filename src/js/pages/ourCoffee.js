import {Component} from "react";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../../styles/ourCoffee/ourCoffee.scss'

class OurCoffee extends Component {
    render() {
        return (
            <>
                <header className="ourCoffee">
                    <Nav/>
                </header>
                <section className="aboutOurBeans">

                </section>
                <section className="buyinGoods">

                </section>
                <Footer/>
            </>
        )
    }
}

export default OurCoffee;
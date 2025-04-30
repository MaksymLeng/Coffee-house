import {Component} from 'react'

import Nav from './Nav';
import Transition from './Transition';

import '../../styles/components/Footer.scss'

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <Nav boolColor = {false}/>
                <Transition/>
            </div>
        )
    }
}

export default Footer;

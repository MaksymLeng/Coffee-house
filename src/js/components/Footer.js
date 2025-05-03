
import Nav from './Nav';
import {Transition} from './Transition';

import '../../styles/components/Footer.scss'

export function Footer() {
    return (
        <div className="Footer">
            <Nav boolColor = {false}/>
            <Transition/>
        </div>
    )
}

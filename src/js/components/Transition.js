import {Component} from 'react';
import { ReactComponent as WhiteCoffeeBean} from '../../assets/images/icons/coffee-beans white.svg';
import { ReactComponent as BlackCoffeeBean} from '../../assets/images/icons/coffee-beans black.svg';

import '../../styles/components/Transition.scss'

class Transition extends Component {
    render() {
        const { boolColor } = this.props;
        const icon = boolColor ? <WhiteCoffeeBean className="icon" /> : <BlackCoffeeBean className="icon" />
        const color = boolColor ? 'line__white' : 'line__black';
        return (
            <div className="transition">
                <div className={`line ${color}`}></div>
                {icon}
                <div className={`line ${color}`}></div>
            </div>
        )
    }
}

export default Transition;
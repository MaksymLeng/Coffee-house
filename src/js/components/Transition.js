import { ReactComponent as WhiteCoffeeBean} from '../../assets/images/icons/coffee-beans white.svg';
import { ReactComponent as BlackCoffeeBean} from '../../assets/images/icons/coffee-beans black.svg';

import '../../styles/components/Transition.scss'

export function Transition(props) {
    const { boolColor } = props;
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
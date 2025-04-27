import { ReactComponent as LogoIcon} from '../../assets/images/icons/coffee-beans-logo.svg';

import '../../styles/Nav.scss'

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__logo">
               <LogoIcon className="nav__icon"/>
                Coffee house
            </div>
            <div className="nav__menu">
                <div className='nav__item'>Our coffee</div>
                <div className='nav__item'>For your pleasure</div>
            </div>
        </nav>
    )
}

export default Nav;


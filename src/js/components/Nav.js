import { ReactComponent as LogoIcon} from '../../assets/images/icons/coffee-beans-logo.svg';

import '../../styles/components/Nav.scss'

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__menu">
                <div className="nav__logo text-white text-xs font-normal">
                    <LogoIcon className="nav__icon"/>
                    Coffee house
                </div>
                <div className='nav__item text-white text-xs font-normal'>Our coffee</div>
                <div className='nav__item text-white text-xs font-normal'>For your pleasure</div>
            </div>
        </nav>
    )
}

export default Nav;


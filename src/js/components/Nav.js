import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";
import { ReactComponent as WhiteCoffeeBean} from '../../assets/images/icons/coffee-beans-logo white.svg';
import { ReactComponent as BlackCoffeeBean} from '../../assets/images/icons/coffee-beans-logo black.svg';

import '../../styles/components/Nav.scss'

export function Nav(props) {
    const { boolColor } = props;
    const { t } = useTranslation();
    const color = boolColor ? 'text-white white' : 'text-black black';
    const LogoIcon = boolColor ? WhiteCoffeeBean : BlackCoffeeBean;
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <div className="nav__menu">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive
                            ? `nav__logo text-xs font-normal active ${color}`
                            : `nav__logo text-xs font-normal ${color}`}>
                        <LogoIcon className="nav__icon"/>
                        {t('nav.logo')}
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive
                            ? `nav__item text-xs font-normal active ${color}`
                            : `nav__item text-xs font-normal ${color}`}>
                        {t('nav.ourCoffee')}
                    </NavLink>
                    <NavLink to="/pleasure" className={({ isActive }) =>
                        isActive
                            ? `nav__item text-xs font-normal active ${color}`
                            : `nav__item text-xs font-normal ${color}`}>
                        {t('nav.pleasure')}
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;


import { Component } from 'react';
import { withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import { ReactComponent as WhiteCoffeeBean} from '../../assets/images/icons/coffee-beans-logo white.svg';
import { ReactComponent as BlackCoffeeBean} from '../../assets/images/icons/coffee-beans-logo black.svg';

import '../../styles/components/Nav.scss'

class Nav extends Component{
    render()
    {
        const { boolColor } = this.props;
        const { t } = this.props;
        const color = boolColor ? 'text-white white' : 'text-black black';
        const LogoIcon = boolColor ? WhiteCoffeeBean : BlackCoffeeBean;
        return (
            <nav className="nav">
                <div className="nav__menu">
                    <Link to="/" className={`nav__logo text-xs font-normal ${color}`}>
                        <LogoIcon className="nav__icon"/>
                        {t('nav.logo')}
                    </Link>
                    <Link to="/about" className={`nav__item text-xs font-normal ${color}`}>{t('nav.ourCoffee')}</Link>
                    <Link to="/pleasure" className={`nav__item text-xs font-normal ${color}`}>{t('nav.pleasure')}</Link>
                </div>
            </nav>
        )
    }
}

export default withTranslation() (Nav);


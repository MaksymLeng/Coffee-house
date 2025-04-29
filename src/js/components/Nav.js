import { ReactComponent as LogoIcon} from '../../assets/images/icons/coffee-beans-logo.svg';
import { useTranslation} from "react-i18next";

import '../../styles/components/Nav.scss'

function Nav() {
    const { t } = useTranslation();

    return (
        <nav className="nav">
            <div className="nav__menu">
                <div className="nav__logo text-white text-xs font-normal">
                    <LogoIcon className="nav__icon"/>
                    {t('nav.logo')}
                </div>
                <div className='nav__item text-white text-xs font-normal'>{t('nav.ourCoffee')}</div>
                <div className='nav__item text-white text-xs font-normal'>{t('nav.pleasure')}</div>
            </div>
        </nav>
    )
}

export default Nav;


import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContentSlider from "../components/ContentSlider";
import BeastCoffee from "../components/BeastCoffee";
import { getProducts} from "../../api/products";

import '../../styles/ourCoffee/ourCoffee.scss'

export function OurCoffee() {
    const { t } = useTranslation();
    const [currentLabel, setLabel] = useState(null);
    const [btnArr, setBtnArr] = useState([
        { Brazil: false },
        { Kenya: false },
        { Columbia: false }
    ]);

    const products = currentLabel ? getProducts(currentLabel) : getProducts();

    const renderButtons = () => {
        return btnArr.map((btn, index) => {
            const label = Object.keys(btn)[0];
            const isActive = btn[label];

            const classList = `buyingGoods__sort__wrapperBtn-btn text-xs font-normal'${
                isActive ? ' active' : ''
            }`;

            return (
                <button
                    key={label + index}
                    className={classList}
                    onClick={() => handleClick(label)}
                >
                    {label}
                </button>
            );
        });
    };

    const handleClick = (label) => {
        if (label === currentLabel) {
            setLabel(null);
        } else {
            setLabel(label);
        }

        const updated = btnArr.map((btn) => {
            const entries = Object.entries(btn);
            if (entries.length === 0) return btn;

            const [key] = entries[0];
            return { [key]: key === label && label !== currentLabel };
        });

        setBtnArr(updated);
    };

    return (
        <>
            <header className="ourCoffee">
                <Nav boolColor = {true}/>
                <h1 className="ourCoffee__title text-white text-lg font-bold">{t('ourCoffee.title')}</h1>
            </header>
            <section className="slider__main">
                <ContentSlider index={0}/>
                <div className="slider__main__transition"></div>
            </section>
            <section className="buyingGoods">
                <div className="buyingGoods__content">
                    <div className="buyingGoods__filter">
                        <div className="buyingGoods__search">
                            <div className="buyingGoods__search-text text-sm font-normal">Looking for</div>
                            <input type="text" className="buyingGoods__search-input text-xs" placeholder="start typing here..."/>
                        </div>
                        <div className="buyingGoods__sort">
                            <div className="buyingGoods__sort-text text-sm font-normal">Or filter</div>
                            <div className="buyingGoods__sort__wrapperBtn">
                                {renderButtons()}
                            </div>
                        </div>
                    </div>
                    <BeastCoffee products = {products} mode={false}/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
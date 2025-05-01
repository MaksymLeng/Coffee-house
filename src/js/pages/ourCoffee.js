import { useTranslation } from 'react-i18next';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContentSlider from "../components/ContentSlider";
import BeastCoffee from "../components/BeastCoffee";
import { getProducts} from "../../api/products";

import '../../styles/ourCoffee/ourCoffee.scss'

export function OurCoffee() {
        const {t} = useTranslation();
        const products = getProducts();
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
                                    <button className="buyingGoods__sort__wrapperBtn-btn brazil text-xs font-normal">Brazil</button>
                                    <button className="buyingGoods__sort__wrapperBtn-btn kenya text-xs font-normal">Kenya</button>
                                    <button className="buyingGoods__sort__wrapperBtn-btn columbia text-xs font-normal">Columbia</button>
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
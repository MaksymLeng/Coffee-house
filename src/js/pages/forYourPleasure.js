import {useTranslation} from "react-i18next";

import Nav from '../components/Nav';
import {Footer} from '../components/Footer';

import BeastCoffee from "../components/BeastCoffee";
import { getProducts} from "../../api/products";
import {ContentSlider} from "../components/ContentSlider";

import '../../styles/forYourPleasure/forYourPleasure.scss'

export function ForYourPleasure(){
    const products = getProducts();
    const {t} = useTranslation();
    return (
        <>
            <header className="forYourPleasure">
                <Nav boolColor = {true}/>
                <h1 className="forYourPleasure__title text-white text-lg font-bold">{t('forYourPleasure.title')}</h1>
            </header>
            <section className="slider__main">
                <ContentSlider index={2}/>
                <div className="slider__main__transition"></div>
            </section>
            <section className="buyingGoods">
                <BeastCoffee products={products} mode={false}/>
            </section>
            <Footer/>
        </>
    )
}
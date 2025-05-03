import {useEffect, useState} from "react";
import SwipeableViews from 'react-swipeable-views';
import {useTranslation, Trans} from "react-i18next";

import {Transition} from './Transition';
import { sliderSlides} from "../../api/slidesData";

import '../../styles/components/ContentSlider.scss'

export function ContentSlider(props) {
    const [index, setIndex] = useState(() => Number(props.index) || 0);
    const slides = sliderSlides;
    const {t} = useTranslation();
    const isMode = index === 1;
    const ifFirstContent = `slider__content${isMode ? ' mode' : ''}`;
    const ifFirstText = `slider__text text-sm text-black font-normal text-preline${isMode ? ' mode' : ''}`;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, 20000);

        return () => clearInterval(interval); // очистка
    }, [slides.length]);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    }

    const handleBack = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    return (
        <div className="slider__wpapper">
            <SwipeableViews index={index} onChangeIndex={(i) => setIndex(i)} enableMouseEvents animateHeight>
                {slides.map((slide, i) => (
                    <div key={i} className="slider__slide">
                        <div className={ifFirstContent}>
                            <div className="slider__photo-grid">
                                <img src={slide.img} alt={slide.alt} className="slider__photo" />
                            </div>
                            <div className="slider__text-grid">
                                <h2 className="slider__title text-black text-md font-normal">
                                    {t(slide.titleKey)}
                                </h2>
                                <div className="slider__decor"><Transition /></div>
                                <p className={ifFirstText}>
                                    <Trans i18nKey={slide.textKey} components={[<b />]} />
                                </p>

                                {slide.price && (
                                    <div className="slider__price">
                                        <div className="slider__price-text text-sm text-black font-bold">Price:</div>
                                        <div className="slider__price-value text-md text-black font-normal">{slide.price}$</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </SwipeableViews>
            <button className="slider__arrow slider__arrow--prev" onClick={handleBack}>❮</button>
            <button className="slider__arrow slider__arrow--next" onClick={handleNext}>❯</button>
        </div>
    )
}


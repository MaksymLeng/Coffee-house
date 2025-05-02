import {Component} from "react";
import SwipeableViews from 'react-swipeable-views';
import {withTranslation, Trans} from "react-i18next";

import Transitions from './Transition';
import { sliderSlides} from "../../api/slidesData";

import '../../styles/components/ContentSlider.scss'

class ContentSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index || 0,
        };
        this.slides = sliderSlides;
    }

    handleNext = () => {
        this.setState((prevState) => ({
            index: (prevState.index + 1) % this.slides.length
        }));
    }

    handleBack = () => {
        this.setState((prevState) => ({
            index: (prevState.index -1 + this.slides.length) % this.slides.length
        }));
    }

    render() {
        const {t} = this.props;
        const {index} = this.state;
        const gapSlide = index === 1 ? 40 : 80;
        const textPosition = index === 1 ? 'left' : 'center';
        const contentWidth = index === 1 ? '800px' : '700px';
        const marginText = index === 1 ? '0' : '15px';
        return (
            <div className="slider__wpapper">
                <SwipeableViews index={index} onChangeIndex={(i) => this.setState({ index: i })} enableMouseEvents animateHeight>
                    {this.slides.map((slide, i) => (
                        <div key={i} className="slider__slide">
                            <div className="slider__content" style={{gap: `${gapSlide}px`, width: contentWidth}}>
                                <div className="slider__photo-grid">
                                    <img src={slide.img} alt={slide.alt} className="slider__photo" />
                                </div>
                                <div className="slider__text-grid">
                                    <h2 className="slider__title text-black text-md font-normal">
                                        {t(slide.titleKey)}
                                    </h2>
                                    <div className="slider__decor"><Transitions /></div>
                                    <p className="slider__text text-sm text-black font-normal text-preline"
                                       style={{textAlign: textPosition, margin: marginText}}>
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
                <button className="slider__arrow slider__arrow--prev" onClick={this.handleBack}>❮</button>
                <button className="slider__arrow slider__arrow--next" onClick={this.handleNext}>❯</button>
            </div>
        )
    }
}

export default withTranslation() (ContentSlider);


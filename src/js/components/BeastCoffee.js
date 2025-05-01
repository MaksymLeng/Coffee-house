import {Component} from 'react';

import '../../styles/components/BestCoffee.scss'

class BeastCoffee extends  Component {
    render() {
        const { products, mode } = this.props;
        const modeChange = mode ? 'product-card' : 'product-card mode';
        const cards = products.map(({id, image, title, price, ...rest}) => {
            return (
                <div className={modeChange} key={id}>
                    <img src={image} alt={title} className="product-card__image"/>
                    <h3 className="product-card__title text-sm font-normal">{title}</h3>
                    {rest && <p className="product-card__country text-sm font-normal">{rest.country}</p>}
                    <p className="product-card__price text-sm font-normal">{price}$</p>
                </div>
            )
        });

        return (
            <div className="product-list">
                {cards}
            </div>
        );
    }
}

export default BeastCoffee;
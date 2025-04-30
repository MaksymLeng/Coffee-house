import {Component} from 'react';

import '../../styles/components/BestCoffee.scss'

class BeastCoffee extends  Component {
    render() {
        const { products } = this.props;

        const cards = products.map(({id, image, title, price}) => {
            return (
                <div className="product-card" key={id}>
                    <img src={image} alt={title} className="product-card__image"/>
                    <h3 className="product-card__title text-sm font-normal">{title}</h3>
                    <p className="product-card__price">{price}$</p>
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
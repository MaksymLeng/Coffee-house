import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../styles/components/BestCoffee.scss'
import '../../styles/components/Fade.scss'

function BeastCoffee (props){
    const { products, mode } = props;
    const nodeRefs = useRef(new Map());
    const modeChange = mode ? 'product-card' : 'product-card mode';

    return (
        <div className="product-list">
            <TransitionGroup component={null}>
                {products.map(({ id, image, title, price, ...rest }) => {
                    if (!nodeRefs.current.has(id)) {
                        nodeRefs.current.set(id, React.createRef());
                    }
                    return (
                        <CSSTransition key={id} timeout={300} classNames="fade" nodeRef={nodeRefs.current.get(id)}>
                            <div ref={nodeRefs.current.get(id)} className={modeChange} key={id}>
                                <img src={image} alt={title} className="product-card__image"/>
                                <div className="product-card-gridText">
                                    <h3 className="product-card__title text-sm font-normal">{title}</h3>
                                    {rest && <p className="product-card__country text-sm font-normal">{rest.country}</p>}
                                    <p className="product-card__price text-sm font-normal">{price}$</p>
                                </div>
                            </div>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
}

export default BeastCoffee;
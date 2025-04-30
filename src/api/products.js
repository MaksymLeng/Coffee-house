import raw from '../data/products.json';

const products = (arr) => arr.map(product => ({
    ...product,
    image: require(`../assets/images/product/${product.image}`),
}));

export const getBestProducts = () => products(raw.best);

export const getProducts = () => products(raw.all);

export const getByCountry = (country) => {
    return products(raw.all).filter(product => product.country === country);
}
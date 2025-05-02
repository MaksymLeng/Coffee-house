import raw from '../data/products.json';

const products = (arr) => arr.map(product => ({
    ...product,
    image: require(`../assets/images/product/${product.image}`),
}));

export const getBestProducts = () => products(raw.best);

export const getProducts = (country) => {
    const all = products(raw.all);

    if (!country) return all;

    return all.filter(product => product.country === country);
};

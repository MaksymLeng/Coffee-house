import raw from '../data/products.json';

const products = (arr) => arr.map(product => ({
    ...product,
    image: require(`../assets/images/product/${product.image}`),
}));

export const getBestProducts = () => products(raw.best);

export const getProducts = (country, query) => {
    const all = products(raw.all);

    let filtered = all;

    if (country) {
        filtered = filtered.filter(product => product.country === country);
    }

    if (query) {
        const lowered = query.toLowerCase();
        filtered = filtered.filter(product =>
            Object.values(product).some(value =>
                String(value).toLowerCase().includes(lowered)
            )
        );
    }

    return filtered;
};

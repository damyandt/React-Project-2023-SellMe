

export const getAll = async () => {
    const clothing = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products.json`);
    const result = await clothing.json();

    return result;
};
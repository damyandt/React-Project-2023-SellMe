

export const getAll = async () => {
    const clothing = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/clothing.json`);
    const result = await clothing.json();

    return result;
};
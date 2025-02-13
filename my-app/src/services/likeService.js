export const like = async (id, userId) => {
    const responce = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products/${id}/likes.json`, {
        method: 'POST',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify(userId)
    });

    return await responce.json()
}
export const unlike = async (id, userId) => {
    await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products/${id}/likes/${userId}.json`, {
        method: 'DELETE',
    });
}

export const getAll = async (id) => {
    const responce = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products/${id}/likes.json`, {
        method: 'GET',
    })

    const result = await responce.json()

    console.log(result)
    return result
}   
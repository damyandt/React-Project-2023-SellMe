export const register = (data) => {
    const apiKey = `AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA`;
    return fetch(`https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
};

export const login = (data) => {
    const apiKey = `AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA`;
    return fetch(`https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
};

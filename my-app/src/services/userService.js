export const register = async (data) => {
    const apiKey = `AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA`;
    return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
};

export const login = async (data) => {
    try {
        const apiKey = `AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA`;
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Login failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error during login:", error);
        return { error: error.message };
    }
};


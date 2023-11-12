import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { register } from "../services/userService"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState('user', {});

    const navigate = useNavigate();

    const onRegisterSubmit = async (values) => {
        const { rePassword, ...registerData } = values;
        if (rePassword !== registerData.password) {
            return alert('Passwords don\'t match!');
        }
        try {
            const result = await register(registerData);
            setAuth(result);
            navigate("/catalog");
        } catch (error) {
            console.log("There is a problem");
        }
    };

    const contextValues = {
        onRegisterSubmit
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/userService"
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('user', {});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        const { email, password } = data;
        try {
            const info = {
                email,
                password
            }
            const result = await login(info);
            if (result.email == undefined) {
                return alert("Password or email not matching!")
            }
            setAuth(result.email);
            navigate("/catalog");
        } catch (error) {
            console.log("There is a problem");
        }
    };

    const onRegisterSubmit = async (values) => {
        const { rePassword, ...registerData } = values;
        if (rePassword !== registerData.password) {
            return alert('Passwords don\'t match!');
        }

        try {
            const result = await register(registerData);
            if (result.email == undefined) {
                return alert("Email allready existing!")
            }
            setAuth(result.email);
            navigate("/catalog");
        } catch (error) {
            console.log("There is a problem");
        }
    };

    const onLogout = async () => {
        try {
            setAuth({});
            navigate("/");
            document.location.reload();
        } catch (error) {
            console.log(error)
        }
    };

    let isAuthenticated = true;

    const makeFalse = () => {
        isAuthenticated = false;
    }

    if (auth == "{}" || auth == {}) {
        isAuthenticated = false;
    }

    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        makeFalse,
        userEmail: auth,
        isAuthenticated,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )

}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}
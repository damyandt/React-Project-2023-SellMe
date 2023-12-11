import { useState } from "react"

export const useForm = (initialValues, onSubmithandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmithandler(values);
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        onSubmit
    };
};
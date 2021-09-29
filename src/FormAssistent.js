import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form.js"
import {
    makeNewAssistent,
} from "./redux/action";

function FormAssistent() {
    const dispatch = useDispatch()
    const [inputAssistent, setInputAssistent] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
        date_birth: "",
        gender: "",
    });

    const handleSubmitAssistent = (e) => {
        e.preventDefault();
        dispatch(
            makeNewAssistent({
                id: uuidv4(),
                ...inputAssistent,
            })
        );
        setInputAssistent({
            name: "",
            surname: "",
            tel: "",
            email: "",
            date_birth: "",
            gender: "",
        })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputAssistent({
            ...inputAssistent,
            [name]: value,
        });
    };

    return (
        <div>
            <h3>Assistent toevoegen</h3>
            <Form handleSubmit={handleSubmitAssistent} handleChange={handleChange} button={"Add Assistent"} input={inputAssistent} />
        </div>

    )

}

export default FormAssistent
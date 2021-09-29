import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form.js"
import {
    makeNewPatient,
} from "./redux/action";


function FormPatient() {
    const dispatch = useDispatch()
    const [inputPatient, setInputPatient] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
        date_birth: "",
        gender: "",
    });

    const handleSubmitAddPatient = (e) => {
        e.preventDefault();
        dispatch(
            makeNewPatient({
                id: uuidv4(),
                ...inputPatient,
            })
        );
        setInputPatient({
            name: "",
            surname: "",
            tel: "",
            email: "",
            date_birth: "",
            gender: "",
        })
    };

    const handleChangePatient = (e) => {
        const { name, value } = e.target;
        setInputPatient({
            ...inputPatient,
            [name]: value,
        });
    };


    return (
        <div>
            <h3>Patient toevoegen</h3>
            <Form handleSubmit={handleSubmitAddPatient} handleChange={handleChangePatient} button={"Add Patient"} input={inputPatient} />
        </div>
    )
}

export default FormPatient
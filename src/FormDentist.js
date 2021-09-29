import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form.js"
import {
    makeNewDentist,
} from "./redux/action";

function FormDentist() {
    const dispatch = useDispatch();
    const [inputDentist, setInputDentist] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
        date_birth: "",
        gender: "",
    });

    const handleSubmitDentist = (e) => {
        e.preventDefault();
        dispatch(
            makeNewDentist({
                id: uuidv4(),
                ...inputDentist,
            })
        );
        setInputDentist({
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
        setInputDentist({
            ...inputDentist,
            [name]: value,
        });
    };


    return (
        <div>
            <h3>Tandarts toevoegen</h3>
            <Form handleSubmit={handleSubmitDentist} handleChange={handleChange} button={"Add Tandarts"} input={inputDentist} />
        </div>
    )

}

export default FormDentist
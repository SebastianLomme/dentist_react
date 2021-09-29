import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionInput from "./OptionInput";
import { v4 as uuidv4 } from "uuid";
import {
    makeNewAppointment,
} from "./redux/action";

function FormNewAppointment() {
    const dispatch = useDispatch()
    const dentist = useSelector((state) => state.Patient.dentist)
    const assistant = useSelector((state) => state.Patient.assistants)
    const patients = useSelector((state) => state.Patient.Patients)
    const [input, setInput] = useState({
        patient: "",
        assistant: "",
        dentist: "",
    });

    const optionArrayDentist = dentist.map(worker =>
        <OptionInput value={`${worker.name} ${worker.surname}`}
            key={uuidv4()} />)

    const optionArrayAssistent = assistant.map(worker =>
        <OptionInput value={`${worker.name} ${worker.surname}`}
            key={uuidv4()} />)
    const optionArrayPasients = patients.map(pasient =>
        <OptionInput value={`${pasient.name} ${pasient.surname}`}
            key={uuidv4()} />
    )

    const handleSubmitNewAppointment = (e) => {
        e.preventDefault()
        dispatch(makeNewAppointment({
            ...input,
            id: uuidv4()
        }))
        console.log(input)
        setInput({
            patient: "",
            assistant: "",
            dentist: "",
            time: "",
            day: "",
        })
        console.log(input)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmitNewAppointment}>

            <label
                htmlFor="patient">Patient</label>
            <select
                name="patient"
                id="patient"
                onChange={handleChange}
                value={input.patient}>
                {optionArrayPasients}
            </select>
            <label
                htmlFor="assistant">Assisistent</label>
            <select
                name="assistant"
                id="assistant"
                onChange={handleChange}
                value={input.assistent}>
                {optionArrayAssistent}
            </select>
            <label
                htmlFor="dentits">Tandarts</label>
            <select
                name="dentist"
                id="dentist"
                onChange={handleChange}
                value={input.dentist}>
                {optionArrayDentist}
            </select>
            <select
                name="time"
                id="time"
                onChange={handleChange}
                value={input.time}>
                <option value="">Kies een tijd</option>
                <option value="8">8.00</option>
                <option value="9">9.00</option>
                <option value="10">10.00</option>
                <option value="11">11.00</option>
                <option value="12">12.00</option>
                <option value="13">13.00</option>
                <option value="14">14.00</option>
                <option value="15">15.00</option>
                <option value="16">16.00</option>
                <option value="17">17.00</option>
            </select>
            <select
                name="day"
                id="day"
                onChange={handleChange}
                value={input.day}>
                                <option value="">Kies een dag</option>
                <option value="1">Maandag</option>
                <option value="2">Dinsdag</option>
                <option value="3">Woensdag</option>
                <option value="4">Donderdag</option>
                <option value="5">Vrijdag</option>
            </select>
            <button
                type="submit">Maak Afspraak</button>
        </form>
    )

}

export default FormNewAppointment
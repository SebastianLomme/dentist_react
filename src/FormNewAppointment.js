import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionInput from "./OptionInput";
import { v4 as uuidv4 } from "uuid";
import {
    makeNewAppointment,
} from "./redux/action";

function FormNewAppointment() {
    const dispatch = useDispatch()
    const dentist = useSelector((state) => state.Appointment.dentist)
    const assistant = useSelector((state) => state.Appointment.assistants)
    const patients = useSelector((state) => state.Patient.Patients)
    const Appointments = useSelector((state => state.Appointment.allAppointments))
    const [input, setInput] = useState({
        patient: "",
        assistant: "",
        dentist: "",
        day: "",
        time:"",
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
        const filterArrayDentist = Appointments.filter(item => item.dentist === input.dentist)
        const dentistArray = []
        const filterArrayAssistant = Appointments.filter(item => item.assistant === input.assistant)
        const AssistantArray = []
        filterArrayDentist.forEach(item => {
            if (item.day === Number(input.day) && item.time === Number(input.time)) {
                console.log("item: ", item.day, item.time)
                console.log("error")
                dentistArray.push(item)
                setInput({
                    ...input,
                    errorDentist: "Kies een andere tandarts",
                    dentist: "",
                })
                console.log("input: ",input)
            } 
        });
        filterArrayAssistant.forEach(item => {
            if (item.day === Number(input.day) && item.time === Number(input.time)) {
                console.log("item: ", item.day, item.time)
                console.log("error")
                AssistantArray.push(item)
                setInput({
                    ...input,
                    errorAssistant: "Kies een andere assistant",
                    assistant: "",
                })
                console.log("input: ",input)
            } 
        });
        console.log(dentistArray)
        if ( dentistArray.length === 0 &&  AssistantArray.length === 0 ) {
            console.log("added")
            dispatch(makeNewAppointment({
                ...input,
                id: uuidv4()
            }))
            setInput({
                patient: "",
                assistant: "",
                dentist: "",
                time: "",
                day: "",
            })
        }
        e.preventDefault()
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
                <option value="">Kies een Patient</option>
                {optionArrayPasients}
            </select>
            <label
                htmlFor="assistant">Assisistent</label>
            <select
                name="assistant"
                id="assistant"
                onChange={handleChange}
                value={input.assistant}>
                <option value="">{ input.errorAssistant === undefined || "" ? "Kies een Assistant" : input.errorAssistant}</option>
                {optionArrayAssistent}
            </select>
            <label
                htmlFor="dentits">Tandarts</label>
            <select
                name="dentist"
                id="dentist"
                onChange={handleChange}
                value={input.dentist}>
                <option value="">{ input.errorDentist === undefined || "" ? "Kies een tandarts" : input.errorDentist }</option>
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
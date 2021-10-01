import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import OptionInput from "./OptionInput";
import { moveAppointment } from "./redux/action";


function MoveAppointment() {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.Appointment.allAppointments)
    const [input, setInput] = useState({
        appointment: "",
        time: "",
        day: "",
    });

    const handleSubmitMoveAppointment = (e) => {
        const [filterArray] = appointments.filter(appointment => appointment.id === input.appointment)
        e.preventDefault();
        const filterArrayDentist = appointments.filter(item => item.dentist === filterArray.dentist)
        const dentistArray = []
        const filterArrayAssistant = appointments.filter(item => item.assistant === filterArray.assistant)
        const AssistantArray = []
        console.log("Dentist", filterArray.dentist)
        filterArrayDentist.forEach(item => {
            if (item.day === Number(input.day) && item.time === Number(input.time)) {
                console.log("error")
                dentistArray.push(item)
                setInput({
                    ...input,
                    error: "Kies een andere tijd of datum",
                })
            } 
        });
        filterArrayAssistant.forEach(item => {
            if (item.day === Number(input.day) && item.time === Number(input.time)) {
                console.log("error")
                AssistantArray.push(item)
                setInput({
                    ...input,
                    error: "Kies een andere tijd of datum!",
                })
            } 
        });
        if ( dentistArray.length === 0 && AssistantArray.length === 0) {
            console.log("added")
            dispatch(moveAppointment(input));
            setInput({
                appointment: "",
                time: "",
                day: "",
            })

        }


    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const optionArrayAppointments = appointments.map(appointment => {
        let day = ""
        switch (appointment.day) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 8:
                day = "Monday";
                break;
            case 9:
                day = "Tuesday";
                break;
            case 10:
                day = "Wednesday";
                break;
            case 11:
                day = "Thursday";
                break;
            case 12:
                day = "Friday";
                break;
            case 15:
                day = "Monday";
                break;
            case 16:
                day = "Tuesday";
                break;
            case 17:
                day = "Wednesday";
                break;
            case 18:
                day = "Thursday";
                break;
            case 19:
                day = "Friday";
                break;
            case 22:
                day = "Monday";
                break;
            case 23:
                day = "Tuesday";
                break;
            case 24:
                day = "Wednesday";
                break;
            case 25:
                day = "Thursday";
                break;
            case 26:
                day = "Friday";
                break;
            default:
                day = "test";
        }
        let time = "";
        switch (appointment.time) {
            case 8:
                time = "08:00";
                break;
            case 9:
                time = "09:00";
                break;
            case 10:
                time = "10:00";
                break;
            case 11:
                time = "11:00";
                break;
            case 12:
                time = "12:00";
                break;
            case 13:
                time = "13:00";
                break;
            case 14:
                time = "14:00";
                break;
            case 15:
                time = "15:00";
                break;
            case 16:
                time = "16:00";
                break;
            case 17:
                time = "17:00";
                break;
            case 18:
                time = "18:00";
                break;
            default:
                time = "";
        };
        return <OptionInput value={`${appointment.patient} ${day} ${time}`}
            id={appointment.id}
            key={uuidv4()} />
    }
    );
    return (
        <form onSubmit={handleSubmitMoveAppointment}>
            <select name="appointment" id="appointment" onChange={handleChange} value={input.appointment}>
                <option value="">Verplaats Afspraak</option>
                {optionArrayAppointments}
            </select>
            {input.error ? <p>{ input.error }</p> : null}
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
            <button type="submit">Verplaats Afspraak</button>

        </form>
    );
};


export default MoveAppointment;

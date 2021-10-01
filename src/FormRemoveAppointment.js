import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import OptionInput from "./OptionInput";
import { removeAppointment } from "./redux/action";


function FormRemoveAppointment() {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.Appointment.allAppointments)
    const [input, setInput] = useState({
        appointment: "",
    });

    const handleSubmitRemoveAppointment = (e) => {
        e.preventDefault();
        dispatch(removeAppointment(input.appointment));
        setInput({
            appointment: "",
        })
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
            case 0:
                day = "Sunday";
                break;
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
            default:
                day = "";
        }
        let time = ""
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
        }
        return <OptionInput value={`${appointment.patient} ${day} ${time}`}
            id={appointment.id}
            key={uuidv4()} />
    }


    )
    return (
        <form onSubmit={handleSubmitRemoveAppointment}>
            <select name="appointment" id="appointment" onChange={handleChange} value={input.appointment}>
                <option value="">verwijder afspraak</option>
                {optionArrayAppointments}
            </select>
            <button type="submit">verwijder afspraak!</button>

        </form>
    )
};


export default FormRemoveAppointment

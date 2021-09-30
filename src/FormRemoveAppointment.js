import React, {useState} from "react";
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

    const optionArrayAppointments = appointments.map(appointment =>
        <OptionInput value={`${appointment.patient} ${appointment.day} ${appointment.time}`}
            id={appointment.id}
            key={uuidv4()} />
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

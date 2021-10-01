import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import OptionInput from "./OptionInput";
import { setPatientSick } from "./redux/action";


function FormPatientSick () {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.Appointment.allAppointments);
    const [input, setInput] = useState({
        patient: "",
    });

    const handleSubmitRemovePatient = (e) => {
        e.preventDefault();
        dispatch(setPatientSick(input.patient));

        setInput({
            patient: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const patientArray = [];
    appointments.forEach(appointment => {
        if (!patientArray.includes(appointment.patient)) {
            patientArray.push(appointment.patient)
        };
    });

    const optionArray = patientArray.map(patient =>
        <OptionInput value={`${patient}`}
            id={patient}
            key={uuidv4()} />
    );

    return (
        <form onSubmit={handleSubmitRemovePatient}>
            <select name="patient" id="patient" onChange={handleChange} value={input.patient}>
                <option value="">Meld patient ziek</option>
                {optionArray}
            </select>
            <button type="submit">Meld patient ziek</button>

        </form>
    );
};


export default FormPatientSick;

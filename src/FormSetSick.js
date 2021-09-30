import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setToSick,
} from "./redux/action";
import OptionInput from "./OptionInput";
import { v4 as uuidv4 } from "uuid";

function FormSetSick() {
    const dispatch = useDispatch();
    const dentist = useSelector((state) => state.Appointment.dentist)
    const assistant = useSelector((state) => state.Appointment.assistants)
    const listWorkers = [...dentist, ...assistant]

    const [input, setInput] = useState({
        name: "",
        surname: "",
    });

    const handleSubmitSick = (e) => {
        e.preventDefault()
        dispatch(setToSick(input.ziekmelden))
        setInput({
            ziekmelden: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const optionArrayWorker = listWorkers.map(worker =>
        <OptionInput value={`${worker.name} ${worker.surname}`}
            key={uuidv4()} />
    )



    return (
        <form onSubmit={handleSubmitSick}>
            <select name="ziekmelden" id="ziekmelden" onChange={handleChange} value={input.ziekmelden}>
                <option value="">Wie is er ziek</option>
                {optionArrayWorker}
            </select>
            <button type="submit">Ziek melden!</button>

        </form>
    )
}

export default FormSetSick
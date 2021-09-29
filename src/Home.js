import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setToSick,
} from "./redux/action";
import OptionInput from "./OptionInput";
import { v4 as uuidv4 } from "uuid";
import FormPatient from "./FormPatient";
import FormDentist from "./FormDentist";
import FormAssistent from "./FormAssistent";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Patient.IsLoading);
  const dentist = useSelector((state) => state.Patient.dentist)
  const assistant = useSelector((state) => state.Patient.assistants)
  const patients = useSelector((state) => state.Patient.Patients)
  const [input, setInput] = useState({
    name: "",
    surname: "",
  });
  const listWorkers = [...dentist, ...assistant]


  const optionArrayWorker = listWorkers.map(worker =>
    <OptionInput value={`${worker.name} ${worker.surname}`}
      key={uuidv4()} />
  )

  const optionArrayDentist = dentist.map(worker =>
    <OptionInput value={`${worker.name} ${worker.surname}`}
      key={uuidv4()} /> )
    
  const optionArrayAssistent = assistant.map(worker =>
        <OptionInput value={`${worker.name} ${worker.surname}`}
          key={uuidv4()} /> )
  const optionArrayPasients = patients.map(pasient =>
    <OptionInput value={`${pasient.name} ${pasient.surname}`}
      key={uuidv4()} />
  )

  const handleSubmitSick = (e) => {
    e.preventDefault()
    dispatch(setToSick(input.ziekmelden))
    console.log("submit", input.ziekmelden)
  }

  const handleSubmitNewAppointment = (e) => {
    e.preventDefault()
    console.log(input.patient)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      {loading ? <h1>...Loading</h1> : <h1>Home!</h1>}

      <div className="form-section">
        <FormPatient />
        <FormDentist />
        <FormAssistent />
      </div>

      <div>
        <form onSubmit={handleSubmitSick}>
          <select name="ziekmelden" id="ziekmelden" onChange={handleChange}>
            <option value="">Wie is er ziek</option>
            {optionArrayWorker}
          </select>
          <button type="submit">Ziek melden!</button>

        </form>
      </div>

      <div>
        <form onSubmit={handleSubmitNewAppointment}>
          {/* day
          time
          dentist
          assistent
          Patient */}

          <label htmlFor="patient">Patient</label>
          <select name="patient" id="patient" onChange={handleChange}>
            {optionArrayPasients}
          </select>
          <label htmlFor="assistent">Assisistent</label>
          <select name="assistent" id="assistent" onChange={handleChange}>
            {optionArrayAssistent}
          </select>
          <label htmlFor="dentits">Tandarts</label>
          <select name="dentist" id="dentist" onChange={handleChange}>
            {optionArrayDentist}
            </select>


          <button type="submit">Maak Afspraak</button>
        </form>
      </div>
    </div>
  );
}

export default Home;

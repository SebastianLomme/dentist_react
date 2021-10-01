import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import FormPatient from "./FormPatient";
import FormDentist from "./FormDentist";
import FormAssistent from "./FormAssistent";
import FormSetSick from "./FormSetSick";
import FormNewAppointment from "./FormNewAppointment";
import FormRemoveAppointment from "./FormRemoveAppointment";
import FormPatientSick from "./FormPatientSick.js";
import MoveAppointment from "./MoveAppointment";

function Home() {
  const loading = useSelector((state) => state.Patient.IsLoading);
  return (
    <div>
      {loading ? <h1>...Loading</h1> : <h1>Home!</h1>}

      <div className="form-section">
        <FormPatient />
        <FormDentist />
        <FormAssistent />
      </div>
      <div>
        <FormSetSick />
      </div>

      <div>
        <FormNewAppointment />
        <FormRemoveAppointment />
        <FormPatientSick />
        <MoveAppointment />
      </div>
    </div>
  );
}

export default Home;

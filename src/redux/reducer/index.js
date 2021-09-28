import PatientData from "./PatientReducer";
import AppointmentReducer from "./AppointmentReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    Patient : PatientData,
    Appointment : AppointmentReducer,
});

export default allReducers;
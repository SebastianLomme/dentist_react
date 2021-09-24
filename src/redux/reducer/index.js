import PatientData from "./PatientReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    Patient: PatientData,
});

export default allReducers;
import { useEffect } from "react";
import { fetchPatientData } from "./redux/action/index";
import { useDispatch } from "react-redux";

export default function PatientData() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPatientData())
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return
}
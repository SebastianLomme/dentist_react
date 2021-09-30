import React, { useEffect } from "react";
import PatientData from "./PatientData";
import { useSelector, useDispatch } from "react-redux";
import { setAllAppointments } from "./redux/action/index";
import { v4 as uuidv4 } from 'uuid';


export function GetApointment() {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.Patient.Patients);
    const dentist = useSelector((state) => state.Appointment.dentist);
    const assistants = useSelector((state) => state.Appointment.assistants);
    const loading = useSelector((state) => state.Patient.IsLoading);
    PatientData();

    const getRandomName = (persons) => {
        const person = persons[Math.floor(Math.random() * persons.length)];
        return `${person.name} ${person.surname}`;
    };

    const getRandomTime = () => {
        let hour;
        while (true) {
            hour = Math.floor(Math.random() * 24);
            if (hour > 7 && hour < 18) {
                return hour;
            }
        }
    };

    const getRandomDay = () => Math.floor(Math.random() * 28) + 1;


    const generateRandomAppointment = () => ({
        id: uuidv4(),
        day: getRandomDay(),
        time: getRandomTime(),
        patient: getRandomName(patient),
        dentist: getRandomName(dentist),
        assistant: getRandomName(assistants),
    });

    const generateRandomAppointments = (num) =>
        Array(num)
            .fill(0)
            .map((_) => generateRandomAppointment());

    const allAppointmentsArray = generateRandomAppointments(150);

    useEffect(() => {
        if (patient[0].name !== "") {
            dispatch(setAllAppointments(allAppointmentsArray));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
    return <div></div>;
}

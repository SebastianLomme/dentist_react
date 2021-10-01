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
    const appointments = useSelector(state => state.Appointment.allAppointments)
    const loading = useSelector((state) => state.Patient.IsLoading);
    PatientData();

    const getRandomName = (persons) => {
        const person = persons[Math.floor(Math.random() * persons.length)];
        return `${person.name} ${person.surname}`;
    };

    // const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

    const getRandomDay = () => {
        let day;
        while (true) {
            day = Math.floor(Math.random() * 28) + 1;
            if (day > 0 && day < 6) {
                return day
            } else if (day > 7 && day < 13) {
                return day
            } else if (day > 14 && day < 20) {
                return day
            } else if (day > 21 && day < 27) {
                return day
            }
        }
    };

    const getRandomTreatmentType = () => {
        const allTreatment = ["Gaatjes vullen", "Kroon zetten", "Tanden trekken", "Kaakchirurgie"];
        const treatment = allTreatment[Math.floor(Math.random() * allTreatment.length)];
        return treatment;
    };

    const generateRandomAppointment = () => {
        const treatment = getRandomTreatmentType();
        const getDentist = () => {
            const fitDentist = dentist.filter(dentist => dentist.treatment_types.includes(treatment))
            console.log("fitDentist", fitDentist)
            const getDentist = fitDentist[Math.floor(Math.random() * fitDentist.length)]
            return `${getDentist.name} ${getDentist.surname}`
        }

        const getRandomTime = () => {
            let hour;
            while (true) {
                hour = Math.floor(Math.random() * 24);
                if (hour > 7 && hour < 18) {
                    return hour;
                }
            }
        };

        return {
            id: uuidv4(),
            day: getRandomDay(),
            time: getRandomTime(),
            patient: getRandomName(patient),
            dentist: getDentist(),
            assistant: getRandomName(assistants),
            treatment: treatment,
        }

    };

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

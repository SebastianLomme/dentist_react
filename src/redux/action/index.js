import axios from "axios"

export const fetchPatientDataRequest = () => {
    return {
        type: "FETCH_PATIENT_REQUEST",

    };
};

export const fetchPatientDataSuccess = patients => {
    return {
        type: "FETCH_PATIENT_SUCCES",
        payload: patients,
    };
};

export const fetchPatientDataFailure = error => {
    return {
        type: "FETCH_PATIENT_FAILURE",
        payload: error,
    };
};

export const fetchPatientData = () => {
    return (dispatch) => {
        dispatch(fetchPatientDataRequest())
        axios({
            method: 'get',
            url: url,
            responseType: 'json',
        })
            .then(response => {
                const patients = response.data
                dispatch(fetchPatientDataSuccess(patients))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(fetchPatientDataFailure(errorMsg))
            })
    }
};

export const makeNewAppointment = (appointment) => {
    return {
        type: "MAKE_NEW_APPOINTMENT",
        payload: appointment,
    }
}

export const setAllAppointments = (appointment) => {
    return {
        type: "SET_ALL_APPOINTMENTS",
        payload: appointment,
    }
}

export const makeNewDentist = (dentist) => {
    return {
        type: "MAKE_NEW_DENTIST",
        payload: dentist,
    }
}

export const makeNewAssistent = (assistant) => {
    return {
        type: "MAKE_NEW_ASSISTENT",
        payload: assistant,
    }
}

export const makeNewPatient = (patient) => {
    return {
        type: "MAKE_NEW_PATIENT",
        payload: patient,
    }
}

export const setToSick = (sick) => {
    return {
        type: "SET_TO_SICK",
        payload: sick,
    }
}

export const removeAppointment = (appointmentid) => {
    return {
        type: "REMOVE_APPOINTMENT",
        payload: appointmentid,
    }
}

export const setPatientSick = (patient) => {
    return {
        type: "SET_PATIENT_SICK",
        payload: patient,
    }
}

export const moveAppointment = (patient) => {
    return {
        type: "MOVE_APPOINTMENT",
        payload: patient,
    }
}

// const url = "https://jsonplaceholder.typicode.com/users"
const url = "https://my.api.mockaroo.com/persons.json?key=a08fd030"
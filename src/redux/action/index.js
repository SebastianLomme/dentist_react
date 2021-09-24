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

const url = "https://my.api.mockaroo.com/person.json?key=37c83670"

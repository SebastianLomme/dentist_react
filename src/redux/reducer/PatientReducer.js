const initialState = {
    IsLoading: false,
    Patients: [{
        date_birth: "",
        email: "",
        gender: "",
        id: "",
        name: "",
        surname: "",
        tel: "",
    }
    ],
};

const PatientData = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PATIENT_REQUEST":
            return {
                ...state,
                IsLoading: true,
            };
        case "FETCH_PATIENT_SUCCES":
            return {
                ...state,
                Patients: [...action.payload],
                IsLoading: false,
                Error: "",
            };
        case "FETCH_PATIENT_FAILURE":
            return {
                ...state,
                Error: action.payload,
                IsLoading: false,
            };
        case "MAKE_NEW_PATIENT":
            return {
                ...state,
                Patients: [...state.Patients, action.payload]
            }
        default: return state
    }
};

export default PatientData





const initialState = {
    IsLoading: false,
    Patients: [],
    Error: "",
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
                    Patients: action.payload,
                    IsLoading: false,
                    Error: "",
                };
                case "FETCH_PATIENT_FAILURE":
            return {
                ...state,
                Error: action.payload,
                IsLoading: false,
            };
        default: return state
    }
};

export default PatientData





import data from "../../data";

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
    ...data,
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
        case "MAKE_NEW_DENTIST":
            console.log("click", state.dentist)
            return {
                ...state,
                dentist: [...state.dentist, action.payload]
            };
        case "MAKE_NEW_ASSISTENT":
            console.log("click", state.assistants)
            return {
                ...state,
                assistants: [...state.assistants, action.payload]
            };
            case "MAKE_NEW_PATIENT":
                console.log("click", state.Patients)
                return {
                    ...state,
                    Patients: [...state.Patients, action.payload]  
                }
        default: return state
    }
};

export default PatientData





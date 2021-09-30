import data from "../../data";


const initialState = {
    allAppointments: [
    ],
    isSick: [],
    ...data,
};

const AppointmentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_ALL_APPOINTMENTS":
            return {
                ...state,
                allAppointments: [...state.allAppointments, ...action.payload].sort((a, b) => a.time < b.time ? 1 : -1).sort((a, b) => a.day > b.day ? 1 : -1),
            };
        case "MAKE_NEW_APPOINTMENT":
            return {
                ...state,
                allAppointments: [...state.allAppointments, { ...action.payload, time: Number(action.payload.time), day: Number(action.payload.day) }].sort((a, b) => a.time < b.time ? 1 : -1).sort((a, b) => a.day > b.day ? 1 : -1),
            };
        case "REMOVE_APPOINTMENT":
            const newArray = state.allAppointments.filter(appointment => appointment.id !== action.payload)
            return {
                ...state,
                allAppointments: newArray,
            }
        case "MAKE_NEW_DENTIST":
            return {
                ...state,
                dentist: [...state.dentist, action.payload]
            };
        case "MAKE_NEW_ASSISTENT":
            return {
                ...state,
                assistants: [...state.assistants, action.payload]
            };
        case "SET_TO_SICK":
            const newState = [];
            state.allAppointments.forEach(element => {
                if (state.isSick.includes(element.dentist)) {
                    newState.push({
                        ...element,
                        isSick: true,
                    });
                } else if (state.isSick.includes(element.assistant)) {
                    newState.push({
                        ...element,
                        isSick: true,
                    });
                } else if (element.dentist === action.payload) {
                    newState.push({
                        ...element,
                        isSick: true,
                    });
                } else if (element.assistant === action.payload) {
                    newState.push({
                        ...element,
                        isSick: true,
                    });
                } else newState.push({ ...element, isSick: false });
            }
            );
            return {
                ...state,
                isSick: [action.payload, ...state.isSick],
                allAppointments: [
                    ...newState,
                ],
            };
        default:
            return state;
    };
};

export default AppointmentReducer;

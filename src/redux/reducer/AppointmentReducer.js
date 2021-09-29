const initialState = {
allAppointments: [
],
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
            allAppointments: [...state.allAppointments, action.payload].sort((a, b) => a.time < b.time ? 1 : -1).sort((a, b) => a.day > b.day ? 1 : -1),
        };
    case "SET_TO_SICK":
        console.log("click", state.allAppointments)
        const newState = []
        state.allAppointments.forEach(element => {
            if(element.dentist === action.payload){
                newState.push({
                    ...element,
                    isSick: true,
                })
            } else newState.push(element)
            }
        )
        return {
            ...state,
            allAppointments: [
                ...newState,
            ]
        };

    default:
    return state;
}
};

export default AppointmentReducer;

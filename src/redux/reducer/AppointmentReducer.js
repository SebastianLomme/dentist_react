const initialState = {
allAppointments: [
],
};

const AppointmentReducer = (state = initialState, action) => {
switch (action.type) {
    case "MAKE_NEW_APPOINTMENT":
    return {
        ...state,
        allAppointments: [...state.allAppointments, ...action.payload.sort((a, b) => a.time < b.time ? 1 : -1).sort((a, b) => a.day > b.day ? 1 : -1)],
    };

    default:
    return state;
}
};

export default AppointmentReducer;


const initialState = []

const dayverReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DAYVER":
            return [...state, action.payload]
        default:
            return state
    }
    return state;
};

export default dayverReducer;
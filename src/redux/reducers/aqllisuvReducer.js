
const initialState = []

const aqllisuvReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AQLLISUV":
            return [...state, action.payload]
        default:
            return state
    }
    return state;
};

export default aqllisuvReducer;
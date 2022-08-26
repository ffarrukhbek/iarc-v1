
const dayverAction = (items) => {
    return {
        type: "GET_DAYVER",
        payload: {...items}
    };
};

export default dayverAction;
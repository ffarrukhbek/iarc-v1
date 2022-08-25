
const dayverAction = (items) => {
    console.log("action: ", items)
    return {
        type: "GET_DAYVER",
        payload: {...items}
    };
};

export default dayverAction;
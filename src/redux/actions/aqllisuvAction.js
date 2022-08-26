
const aqllisuvAction = (items) => {
    return {
        type: "GET_AQLLISUV",
        payload: {...items}
    };
};

export default aqllisuvAction;
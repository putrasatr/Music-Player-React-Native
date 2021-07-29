const initialState = {
    data: []
}

const audio = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "LOAD_DATA":

            return;
        case "LOAD_DATA_SUCCESS":
            return {
                ...state,
                data
            };
        case "LOAD_DATA_FAIL":

            return;

        default:
            return state;
    }
}

export default audio
const initialState = {
    theme:undefined,
    message: undefined
}

const theme = (state = initialState, action) => {
    const { type, theme, message } = action
    switch (type) {
        case "SET_THEME_SUCCESS":
            return {
                ...state,
                theme
            };
        case "SET_THEME_FAIL":
            return {
                ...state,
                message
            };

        default:
            return state;
    }
}

export default theme
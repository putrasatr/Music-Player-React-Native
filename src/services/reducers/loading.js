const initialState = {
    isLoading:true
}

const loading = (state = initialState, action) => {
    const { type, isLoading } = action
    switch (type) {
        case "LOADING":
            return {
                ...state,
                isLoading
            };
        default:
            return state;
    }
}

export default loading
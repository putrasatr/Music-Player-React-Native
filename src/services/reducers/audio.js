const initialState = {
    data: [],
    dataPerSinger: {}
}

const audio = (state = initialState, action) => {
    const { type, data, dataPerSinger } = action
    switch (type) {
        case "LOAD_DATA_SUCCESS":
            return {
                ...state,
                data
            };
        case "LOAD_DATA_FAIL":
            return state;
        case 'LOAD_DATA_PER_SINGER_SUCCESS':
            return {
                ...state,
                dataPerSinger
            }
        case 'LOAD_DATA_PER_SINGER_FAILURE':

        default:
            return state;
    }
}

export default audio
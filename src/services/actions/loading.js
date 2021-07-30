//load 
export const loadingDone = isLoading => ({
    type: 'LOADING',
    isLoading
})

export const loading = payload => {
    return async dispatch => {
       return dispatch(loadingDone(payload))
    }
}
//end load data
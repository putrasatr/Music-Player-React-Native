import { useThemeContext } from "../../context"
import { SecureAsyncStorage } from "../../helpers"
import { loading } from "./loading"

//set theme 
export const setThemeSuccess = payload => ({
    type: 'SET_THEME_SUCCESS',
    theme: payload
})

export const setThemeFailure = () => ({
    type: 'SET_THEME_FAIL',
    message: "false while set Item"
})

export const setTheme = (theme) => {
    return async dispatch => {
        const status = await SecureAsyncStorage.setItem("theme", theme)
        if (status) {
            dispatch(setThemeSuccess(theme))
            return
        }
        return dispatch(setThemeFailure())
    }
}
//end set theme
import { combineReducers } from "redux"

import audio from "./audio"
import loading from "./loading"
import themes from "./theme"

export default combineReducers({
    audio,
    loading,
    themes
})
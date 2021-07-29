import { combineReducers } from "redux"
import audio from "./audio"
import loading from "./loading"

export default combineReducers({
    audio,
    loading
})
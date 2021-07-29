import * as MediaLibrary from "expo-media-library"

import { FilterFile } from "../../helpers";
import { loadingDone } from "./loading";

//load data 
export const loadDataSuccess = data => ({
    type: 'LOAD_DATA_SUCCESS',
    data
})

export const loadDataFailure = () => ({
    type: 'LOAD_DATA_FAILURE'
})

export const loadData = () => {
    return async dispatch => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio"
        })
        media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio",
            first: media.totalCount
        })
        const filterAudio = await FilterFile(media.assets)
        dispatch(loadingDone(false))
        dispatch(loadDataSuccess(filterAudio))
    }
}
//end load data
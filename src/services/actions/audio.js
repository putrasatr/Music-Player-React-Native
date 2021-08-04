import * as MediaLibrary from "expo-media-library"

import { FilterFile, getSongPerArtist } from "../../helpers";
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


//loaddatapersinger
export const loadDataPerSingerSuccess = dataPerSinger => ({
    type: 'LOAD_DATA_PER_SINGER_SUCCESS',
    dataPerSinger
})

export const loadDataPerSingerFailure = () => ({
    type: 'LOAD_DATA_PER_SINGER_FAILURE'
})

export const loadDataPerSinger = data => {
    return async dispatch => {
        try {
            const res = await getSongPerArtist(data)
            dispatch(loadingDone(false))
            dispatch(loadDataPerSingerSuccess(res))
        } catch (error) {
            console.log(error)
        }

    }
}
//endloaddatapersinger

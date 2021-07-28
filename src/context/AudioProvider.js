import React, { useEffect, createContext, useState, useContext } from "react"
import { Alert } from "react-native"
import * as MediaLibrary from "expo-media-library"
import { FilterFile } from "../helpers";


export const AudioContext = createContext({
    audioFiles: []
})

export const useAudioContext = () => useContext(AudioContext);

export default function AudioProvider({ children }) {
    const [audioFiles, setAudioFiles] = useState([])
    const permissionAllert = () => {
        Alert.alert("Permission Required",
            "This app need to read audio files!", [{
                text: "I am ready!",
                onPress: () => getPermission()
            }, {
                text: "cancel",
                onPress: () => permissionAllert()
            }])
    }

    const getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio"
        })
        media = await MediaLibrary.getAssetsAsync({
            mediaType: "audio",
            first: media.totalCount,

        })
        const filterAudio = await FilterFile(media)
        setAudioFiles(filterAudio)
    }
    const getPermission = async () => {
        // {
        //     "canAskAgain": true,
        //     "expires": "never",
        //     "granted": true,
        //     "status": "granted"
        // }
        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted) {
            getAudioFiles()
        }
        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary
                .requestPermissionsAsync()
            if (status === "denied" && canAskAgain) {
                //diplay alert

            }
            if (status === "granted") {
                getAudioFiles()
            }
            if (status === "denied" && !canAskAgain) {
                //diplay some error
            }
        }
    }
    useEffect(() => {
        getPermission()
        return () => { clearTimeout() }
    }, [getPermission])
    return (
        <AudioContext.Provider value={{ audioFiles }}>
            {children}
        </AudioContext.Provider>
    )
}
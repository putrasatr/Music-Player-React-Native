import React, {
    useEffect,
    createContext,
    useState,
    useContext
} from "react"
import { Alert, View, Text } from "react-native"
import * as MediaLibrary from "expo-media-library"

export const AudioContext = createContext({
    audioFiles: []
})

export const useAudioContext = () => useContext(AudioContext);

export default function AudioProvider({ children }) {
    const [permissionError, setErrorMessage] = useState(false)
    const [playbackObj, setPlayBackObj] = useState(null)
    const [soundObj, setSoundObj] = useState(null)
    const [currentAudio, setCurrentAudio] = useState({})

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
    const getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary
                .requestPermissionsAsync()
            if (status === "denied" && canAskAgain) {
                //diplay alert

            }
            if (status === "denied" && !canAskAgain) {
                //diplay some error
                setErrorMessage(true)
            }
        }
    }
    useEffect(() => {
        getPermission()
        return async () => { clearTimeout() }
    }, [getPermission])
    if (permissionError)
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    color: "red"
                }}>It looks like you haven't accept the permission.</Text>
            </View>
        )
    return (
        <AudioContext.Provider value={{
            playbackObj,
            currentAudio,
            soundObj,
            setCurrentAudio,
            setPlayBackObj,
            setSoundObj
        }}>
            {children}
        </AudioContext.Provider>
    )
}
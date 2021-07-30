import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { Audio } from 'expo-av';

import { Layout, Header } from "../../../components"
import { Content } from "../contents";
import { useThemeContext, useAudioContext } from "../../../context"
import { pause, play, playAnotherAudio, resume } from "../../../misc/audioController"
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../../services/actions/audio";
import { BackgroundColor, Purple, White } from "../../../assets/colors";
import { loading } from "../../../services/actions/loading";
import { styles } from "./styles"

export default function Home({ navigation }) {
    const { theme } = useThemeContext()
    const [idCurrent, setIdCurrent] = useState(null)
    const [audioObj, setAudioObj] = useState({})
    const [isPlay, setIsPlay] = useState(false)
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(({ audio, loading }) => ({ ...audio, ...loading }))
    const {
        soundObj,
        playbackObj,
        currentAudio,
        setCurrentAudio,
        setPlayBackObj,
        setSoundObj
    } = useAudioContext()
    const isDarkTheme = theme === "dark"
    const { title, artist } = audioObj
    useEffect(() => {
        dispatch(loadData("LOAD"))
        dispatch(loading(true))
        return () => clearTimeout()
    }, [dispatch])
    const handlePressAudio = async audio => {
        setIdCurrent(audio.id)
        setAudioObj(audio)
        //first play
        if (soundObj === null) {
            setIsPlay(true)
            const playback = new Audio.Sound()
            const status = await play(playback, audio.uri)
            setPlayBackObj(playback)
            setSoundObj(status)
            setCurrentAudio(audio)
            return
        }
        //pause
        if (soundObj.isLoaded && soundObj.isPlaying && currentAudio.id === audio.id) {
            setIsPlay(false)
            const status = await pause(playbackObj)
            setPlayBackObj(playbackObj)
            setSoundObj(status)
            return
        }

        //resume
        if (soundObj.isLoaded && !(soundObj.isPlaying) && currentAudio.id === audio.id) {
            setIsPlay(true)
            const status = await resume(playbackObj)
            setSoundObj(status)
            return
        }
        //another audio
        if (soundObj.isLoaded && currentAudio.id !== audio.id) {
            setIsPlay(true)
            const status = await playAnotherAudio(playbackObj, audio.uri)
            setSoundObj(status)
            setCurrentAudio(audio)
            return
        }
    }
    return (
        <Layout>
            <Header
                isDarkTheme={isDarkTheme} />
            {isLoading
                ? <ActivityIndicator size="large" color={Purple} style={{ width: "100%", height: "85%" }} />
                : <Content
                    idCurrent={idCurrent}
                    data={data}
                    isDarkTheme={isDarkTheme}
                    handlePressAudio={handlePressAudio} />}

            {idCurrent
                ? <View style={[styles.containerBottom, { backgroundColor: isDarkTheme ? "#28293f" : "white", }]}>
                    <View style={[styles.colBottom, { backgroundColor: isDarkTheme ? BackgroundColor : "#eaeaea", }]}>
                        <MaterialCommunityIcons
                            name="music"
                            color={Purple}
                            size={26} />
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("PlayRoomScreen", { audioObj, handlePressAudio: () => handlePressAudio(audioObj) })}>
                            <View style={{
                                flexDirection: "column",
                                width: "80%",
                                height: "100%"
                            }}>
                                <Text
                                    style={{
                                        color: isDarkTheme
                                            ? "white"
                                            : "black",
                                    }}
                                    numberOfLines={1}>{artist}</Text>
                                <Text
                                    style={{
                                        color: isDarkTheme
                                            ? "white"
                                            : "black",
                                    }}
                                    numberOfLines={1}>{title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => handlePressAudio(audioObj)}>
                            <MaterialCommunityIcons
                                name={isPlay ? "pause" : "play"}
                                size={26}
                                color={isDarkTheme ? White : "black"}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                : <View />}
        </Layout>
    )
}
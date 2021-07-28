import React from "react"
import {
    View,
    Text,
    Image,
    ScrollView
} from "react-native"

import { Layout } from "../../../components"
import { useAudioContext } from "../../../context/AudioProvider"
import { useThemeContext } from "../../../context/ThemeProvider"
import { secondsToHms } from "../../../helpers"
import { styles } from "./styles"

const Header = ({ isDarkTheme, setFontColor }) => (
    <Text
        onPress={setFontColor}
        style={{
            color: isDarkTheme ? "white" : "black"
        }}>
        {isDarkTheme ? "WooHo" : "oHooW"}
    </Text>
)

const Item = ({ title, isDarkTheme, time, art }) => {
    const duration = secondsToHms(time)
    return (
        <View style={[styles.col, {
            backgroundColor: isDarkTheme ? "#28293f" : "#eaeaea"
        }]}>
            <Image
                style={styles.img}
                source={require("../../../assets/images/chill.png")} />
            <View style={styles.rowText}>
                <Text
                    style={[styles.title, {
                        color: isDarkTheme ? "white" : "black"
                    }]}
                    numberOfLines={1}>{art}</Text>
                <Text style={styles.artist}>{title}</Text>
            </View>
            <Text style={{
                color: isDarkTheme ? "white" : "black"
            }}>{duration}</Text>
        </View>
    )
}
const Content = ({ data, isDarkTheme }) => (
    <ScrollView>
        {data.map(({ duration, artist, title }, i) => (
            <Item
                title={title}
                isDarkTheme={isDarkTheme}
                time={duration}
                art={artist}
                key={i} />
        ))}
    </ScrollView>
)
export default function Home() {
    const { audioFiles } = useAudioContext()
    const { theme, setTheme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    const setFontColor = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    }
    return (
        <Layout>
            <Header
                isDarkTheme={isDarkTheme}
                setFontColor={setFontColor} />
            <Content
                data={audioFiles}
                isDarkTheme={isDarkTheme} />
        </Layout>
    )
}
import React, { useState } from "react"
import {
    View,
    ScrollView,
    Text,
    Switch,
} from "react-native"


import { Layout } from "../.."
import { Purple } from "../../../assets/colors"
import { useThemeContext, useLocalesContext } from "../../../context"
import { styles } from "./styles"
const localesKey = "components.setting"
const Options = ({ isDarkTheme, setDarkTheme, setLang, isEnglish }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <Text style={{
                    color: isDarkTheme ? "white" : "black"
                }}>
                    Mode Gelap
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#f4f3f4" }}
                    thumbColor={isDarkTheme ? Purple : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setDarkTheme}
                    value={isDarkTheme}
                />
            </View>
            <View style={styles.containerRow}>
                <Text style={{
                    color: isDarkTheme ? "white" : "black"
                }}>{isEnglish ? "Language" : "Bahasa"}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#f4f3f4" }}
                    thumbColor={isEnglish ? Purple : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setLang}
                    value={isEnglish}
                />
            </View>
        </View>
    );
}
export default function Component() {
    const { theme, setTheme } = useThemeContext()
    const { language, localesVal, setLang } = useLocalesContext()
    const isDarkTheme = theme == "dark"
    const isEnglish = language == "eg"
    const setDarkTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    }
    return (
        <Layout>
            <Text style={{
                color: isDarkTheme ? "white" : "black"
            }}>
                {localesVal[localesKey + ".title"]}
            </Text>
            <Options
                isEnglish={isEnglish}
                setLang={() => setLang(isEnglish ? "id" : "eg")}
                isDarkTheme={isDarkTheme}
                setDarkTheme={setDarkTheme} />

        </Layout>
    )
}
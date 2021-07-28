import React, { useState } from "react"
import {
    View,
    ScrollView,
    Text,
    Switch,
} from "react-native"


import { Layout } from "../.."
import { Purple } from "../../../assets/colors"
import { useThemeContext } from "../../../context/ThemeProvider"
import { styles } from "./styles"

const App = ({ isDarkTheme, setDarkTheme }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                color: isDarkTheme ? "white" : "black"
            }}>Dark Mode</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#fff" }}
                thumbColor={isDarkTheme ? Purple : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setDarkTheme}
                value={isDarkTheme}
            />
        </View>
    );
}
export default function Component() {
    const { theme, setTheme } = useThemeContext()
    const isDarkTheme = theme == "dark"
    const setDarkTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    }
    return (
        <Layout>
            <Text style={{
                color: isDarkTheme ? "white" : "black"
            }}>
                Setting
            </Text>
            <App isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme} />
        </Layout>
    )
}
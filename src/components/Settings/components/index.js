import React, { useEffect, useState } from "react"
import {
    View,
    ScrollView,
    Text,
    Switch,
    ActivityIndicator,
} from "react-native"


import { Options } from "./Options"
import { useLocalesContext, useThemeContext } from "../../../context"
// import { setTheme } from "../../../services/actions/theme"
import { Layout } from "../.."
import { styles } from "./styles"

const localesKey = "components.setting"

export default function Component() {
    const { language, localesVal, setLang } = useLocalesContext()
    const { setThemeContext, theme } = useThemeContext()
    const isDarkTheme = theme == "dark"
    const isEnglish = language == "eg"
    const handleSetTheme = () => {
        setThemeContext(isDarkTheme ? "light" : "dark")
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
                handleSetTheme={handleSetTheme} />

        </Layout>
    )
}
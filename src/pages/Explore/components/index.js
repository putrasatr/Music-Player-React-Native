import React from "react"
import { View, FlatList, Text, Image, ScrollView } from "react-native"

import { Header, Layout } from "../../../components"
import { useThemeContext } from "../../../context"
import { White } from "../../../assets/colors"
import { styles } from "./styles"

export default function Explore() {
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    return (
        <Layout>
            <Header isDarkTheme={isDarkTheme} />
            <View>
                <Text style={{
                    color: isDarkTheme ? White : "black"
                }}>Search</Text>
            </View>
        </Layout>
    )
}
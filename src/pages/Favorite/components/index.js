import React from "react"
import { View, FlatList, Text, Image, ScrollView } from "react-native"
import { White } from "../../../assets/colors"

import { Header, Layout } from "../../../components"
import { useThemeContext } from "../../../context"
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
                }}>Favorite</Text>
            </View>
        </Layout>
    )
}
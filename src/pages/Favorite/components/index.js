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
            <View
                style={{
                    width: "100%",
                    height: "80%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Image
                    source={require("../../../assets/images/favorite.png")}
                    style={{
                        width: 120,
                        height: 120,
                    }}
                />
                <Text style={{
                    color: isDarkTheme ? White : "black"
                }}>Anda belum menambahkan lagu favorit</Text>
                <Text style={{
                    fontSize: 12,
                    color: "#58596b",
                    textAlign:"center"
                }}>Anda dapat menambahakna lagu favorite dan memainkannya disini</Text>
            </View>
        </Layout>
    )
}
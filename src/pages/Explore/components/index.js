import React, { useState, useEffect } from "react"
import { View, FlatList, Text, Image, ScrollView, ActivityIndicator } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { Header, Layout } from "../../../components"
import { useThemeContext } from "../../../context"
import { White, Purple, FillgroundColor } from "../../../assets/colors"
import { styles } from "./styles"
import { loading } from "../../../services/actions/loading"
import { getSongPerArtist } from "../../../helpers"

export default function Explore() {
    const { theme } = useThemeContext()
    const [songs, setSongs] = useState(null)
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(({ audio, loading }) => ({ ...audio, ...loading }))
    const isDarkTheme = theme === "dark"

    useEffect(async () => {
        dispatch(loading(true))
        const res = await getSongPerArtist(data)
        setSongs(res)
        dispatch(loading(false))
        return () => clearTimeout()
    }, [dispatch])
    const Content = ({ songObj }) => {
        let col = []
        let i = 0
        for (const key in songObj) {
            col.push(<Text
                key={i}
                style={{
                    color: isDarkTheme ? White : "black"
                }}>{key}</Text>)
            i++
        }
        return (
            <View>
                {col}
            </View>
        )
    }
    console.log(isLoading)
    return (
        <Layout>
            <Header isDarkTheme={isDarkTheme} />
            {isLoading
                ? <ActivityIndicator size="large" color={Purple} style={{ width: "100%", height: "85%" }} />
                : songs
                    ? <Content songObj={songs} />
                    : <Text>No Songs</Text>}

        </Layout>
    )
}
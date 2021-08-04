import React, { useEffect } from "react"
import { View, Text, ActivityIndicator, TouchableOpacity, Animated } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import { Swipeable, RectButton } from "react-native-gesture-handler"

import { Header, Layout } from "../../../components"
import { useThemeContext } from "../../../context"
import { White, Purple, FillgroundColor } from "../../../assets/colors"
import { styles } from "./styles"
import { loading } from "../../../services/actions/loading"
import { loadDataPerSinger } from "../../../services/actions/audio"

export default function Explore({ navigation }) {
    const { theme } = useThemeContext()
    const dispatch = useDispatch()
    const { data, isLoading, dataPerSinger } = useSelector(({ audio, loading }) => ({ ...audio, ...loading }))
    const isDarkTheme = theme === "dark"

    // useEffect(() => {
    //     dispatch(loading(true))
    //     setTimeout(() => {
    //         dispatch(loadDataPerSinger(data))
    //     }, 500)
    //     return () => clearTimeout()
    // }, [dispatch])
    const renderLeftItem = (progress,dragX) => {
        const trans = dragX.interpolate({
            inputRange: [4, 50, 100, 101],
            outputRange: [-100, 0, 0, 1],
        });
        return (
            <RectButton
                
                style={{
                    width: 100,
                    backgroundColor: "red",
                   
                }}>
                <Animated.Text
                    style={{
                        color: White,
                       transform: [{ translateX: trans }],
                    }}>
                    Left Open
                </Animated.Text>
            </RectButton>
        )
    }
    const Item = ({ name }) => (
        <Swipeable
            renderLeftActions={renderLeftItem}>
            <View style={{
                width: "100%",
                paddingVertical: 10,
                backgroundColor: FillgroundColor
            }}>
                <Text
                    style={{
                        color: isDarkTheme ? White : "black"
                    }}>{name}</Text>
            </View>
        </Swipeable>
    )
    const Content = ({ songObj }) => {
        let col = []
        let i = 0
        for (const name in songObj) {
            col.push(<Item key={i} name={name} />)
            i++
        }
        return (
            <View style={styles.container}>
                {col}
            </View>
        )
    }
    return (
        <Layout>
            <Header isDarkTheme={isDarkTheme} />
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                <View style={{
                    backgroundColor: FillgroundColor,
                    width: "100%",
                    height: 50,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <MaterialCommunityIcons
                        name="magnify"
                        size={20}
                        color={White}
                    />
                </View>
            </TouchableOpacity>
            {isLoading
                ? <ActivityIndicator size="large" color={Purple} style={{ width: "100%", height: "75%" }} />
                : dataPerSinger
                    ? <Content songObj={dataPerSinger} />
                    : <Text>No Songs</Text>}

        </Layout>
    )
}
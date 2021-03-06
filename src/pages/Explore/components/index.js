import React, { useEffect } from "react"
import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView, useWindowDimensions, FlatList, SafeAreaView, VirtualizedList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"

import { Header, Layout } from "../../../components"
import { useThemeContext } from "../../../context"
import { White, Purple, FillgroundColor } from "../../../assets/colors"
import { styles } from "./styles"
import { loading } from "../../../services/actions/loading"
import { loadDataPerSinger } from "../../../services/actions/audio"

export default function Explore({ navigation }) {
    const { height, width } = useWindowDimensions()
    const { theme } = useThemeContext()
    const dispatch = useDispatch()
    const { data, isLoading, dataPerSinger } = useSelector(({ audio, loading }) => ({ ...audio, ...loading }))
    const isDarkTheme = theme === "dark"

    useEffect(() => {
        dispatch(loading(true))
        setTimeout(() => {
            dispatch(loadDataPerSinger(data))
        }, 500)
        return () => clearTimeout()
    }, [dispatch])
    const ItemRow = ({ name, songs }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("SongsListScreen", name)}
            style={{
                backgroundColor: "red",
                marginRight: 10,
                borderRadius: 3
            }}>
            <View style={{
                width: width - 100,
                padding: 10,
                height: height / 5
            }}>
                <Text
                    style={{
                        color: isDarkTheme ? White : "black"
                    }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
    const ItemCol = ({ name }) => (
        <TouchableOpacity
            style={{
                justifyContent: "center",
                alignItems: "flex-start",
                marginVertical: 10,
                width: "49%",
            }}
            onPress={() => navigation.navigate("SongsListScreen", name)}>
            <View style={{
                height: height / 5.5,
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 1,
                width: "100%",
                backgroundColor: FillgroundColor
            }}>
                <Text
                    style={{
                        color: isDarkTheme ? White : "black"
                    }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
    const Content = ({ songObj }) => {
        let row = []
        let col = []
        let i = 0
        for (const name in songObj) {
            if (i < 5)
                row.push(<ItemRow key={i} name={name} songs={songObj[name]} />)
            else
                col.push(name)
            i++
        }
        return (
            <SafeAreaView>
                <FlatList
                    data={col}
                    numColumns={2}
                    keyExtractor={(item, i) => i}
                    ItemSeparatorComponent={() => <View style={{ margin: 2 }} />}
                    ListHeaderComponent={() => <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal>
                        {row}
                    </ScrollView>}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        flex: 1
                    }}
                    ListFooterComponent={() => <View style={{ width: "100%", height: 200 }} />}
                    renderItem={({ item }) => <ItemCol name={item} />} />
            </SafeAreaView>
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
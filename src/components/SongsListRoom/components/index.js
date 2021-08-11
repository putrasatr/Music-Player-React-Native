import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { useSelector } from 'react-redux';

import { Layout } from "../../"
import { White, Purple, BackgroundColor } from '../../../assets/colors';
import { useThemeContext } from '../../../context';
import { styles } from "./styles"

const Item = ({ title }) => {
    return (
        <Text style={{
            color: White
        }}>{title}</Text>
    )
}

export default function Component({ navigation, route: { params } }) {
    const { theme } = useThemeContext()
    const { dataPerSinger } = useSelector(({ audio }) => audio)
    const data = dataPerSinger[params]
    const isDarkTheme = theme === "dark"
    const Content = ({ artist, songs }) => (
        <View style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                    size={30}
                    color="white"
                    name={"chevron-left"} />
            </TouchableOpacity>
            <Image
                style={{
                    width: "100%",
                    height: 100
                }}
                source={require("../../../assets/images/chill.png")} />
            <FlatList
                data={songs}
                keyExtractor={(item, i) => i}
                renderItem={({ item: { title } }) => <Item title={title} />} />
        </View>
    )
    return (
        <Layout>
            <Content
                artist={params}
                songs={data}
                isDarkTheme={isDarkTheme} />
        </Layout>
    )
}

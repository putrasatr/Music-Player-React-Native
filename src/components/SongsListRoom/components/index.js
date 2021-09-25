import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { useSelector } from 'react-redux';

import { HStack } from '../../Card';
import { Layout } from "../../"
import { White, Purple, BackgroundColor } from '../../../assets/colors';
import { useThemeContext } from '../../../context';
import { styles } from "./styles"

const Item = ({ title }) => {
    return (
        <HStack>
            <Image
                source={require("../../../assets/images/logoWooho.png")}
                style={{
                    width: "33%",
                    maxHeight: 80,
                    borderRadius: 4,
                    marginRight: 10
                }} />
            <Text style={{
                color: White
            }}>{title}</Text>
        </HStack>
    )
}

export default function Component({ navigation, route: { params } }) {
    const { theme } = useThemeContext()
    const { dataPerSinger } = useSelector(({ audio }) => audio)
    const data = dataPerSinger[params]
    const isDarkTheme = theme === "dark"
    const Header = ({ artist }) => (
        <>
            <TouchableOpacity style={{
                marginBottom: 20
            }}
                onPress={() => navigation.goBack()}>
                <HStack>
                    <MaterialCommunityIcons
                        size={40}
                        color="white"
                        name={"chevron-left"} />
                    <Text style={{
                        color: White
                    }}>{artist}</Text>
                </HStack>
            </TouchableOpacity>
            <Image
                style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 4
                }}
                source={require("../../../assets/images/banner.png")} />
        </>
    )
    const Content = ({ artist, songs }) => (
        <View style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
        }}>
            <FlatList
                style={{
                    width: "100%"
                }}
                showsVerticalScrollIndicator={false}
                data={songs}
                keyExtractor={(item, i) => i}
                ListHeaderComponent={() => <Header artist={artist} />}
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

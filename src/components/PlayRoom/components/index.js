import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";

import { Layout } from "../../"
import { White, Purple, BackgroundColor } from '../../../assets/colors';
import { useThemeContext } from '../../../context';
import { secondsToHms } from '../../../helpers';
import { Screen1 } from '../../SplashScreen';
import { styles } from "./styles"

const Content = ({ duration, title, art, isDarkTheme }) => (
    <View style={{
        width: "100%",
        height: "20%",
        padding: 10
    }}>
        <Text
            numberOfLines={1}
            style={{
                color: isDarkTheme ? White : "black"
            }}>{title}</Text>
        <Text
            numberOfLines={1}
            style={{
                color: isDarkTheme ? White : "black"
            }}>{art}</Text>
        <View style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Text style={{
                color: isDarkTheme ? White : "black"
            }}>00:00</Text>
            <View style={{
                height: 3,
                width: "70%",
                backgroundColor: White
            }} />
            <Text style={{
                color: isDarkTheme ? White : "black"
            }}>{secondsToHms(duration)}</Text>
        </View>
    </View >
)
export default function Component({ navigation, route: { params } }) {
    const { audioObj, handlePressAudio } = params
    const { duration, title, uri, artist: art, filename } = audioObj
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    return <Screen1 navigation={navigation} />
    return (
        <Layout>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                    name="chevron-down"
                    size={35}
                    color={isDarkTheme ? White : "black"} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/images/chill.png")}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100
                    }} />
                <Content
                    title={title}
                    art={art}
                    duration={duration}
                    isDarkTheme={isDarkTheme} />
                <TouchableOpacity onPress={handlePressAudio}>
                    <MaterialCommunityIcons
                        name="play"
                        size={40}
                        color={isDarkTheme ? White : Purple} />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}
import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";

import { Layout } from "../../"
import { White } from '../../../assets/colors';
import { useThemeContext } from '../../../context';
import { styles } from "./styles"

export default function Component({ navigation, route: { params } }) {
    const { audioObj: { duration, title, uri, artist: art, filename }, handlePressAudio } = params
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
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
                <Text style={{
                    color: "white"
                }}>{title}</Text>
                <Text style={{
                    color: "white"
                }}>{art}</Text>
                <Text style={{
                    color: "white"
                }}>{duration}</Text>
            </View >
        </Layout>
    )
}
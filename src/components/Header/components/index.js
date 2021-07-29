import React from "react"
import { View, Text } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"

import { Purple } from "../../../assets/colors"
import { styles } from "./styles"

export default function Component({ isDarkTheme }) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="bookmark-music"
                size={40}
                color={Purple}
            />
            <Text
                style={{
                    fontSize: 25,
                    color: isDarkTheme ? "white" : "black"
                }}>
                Wooho
            </Text>
        </View>
    )
}
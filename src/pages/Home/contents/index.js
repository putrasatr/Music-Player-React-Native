import React from "react"
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from "react-native"

import { secondsToHms } from "../../../helpers"
import { Purple } from "../../../assets/colors"
import { styles } from "../components/styles"

const Item = ({ title, isDarkTheme, time, art, onPress, filename, uri, isPlay }) => {
    const duration = secondsToHms(time)
    // const params = { filename, title, art, duration, uri }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.col, {
                backgroundColor: isDarkTheme ? "#28293f" : "#eaeaea"
            }]}>
                <Image
                    style={styles.img}
                    source={require("../../../assets/images/chill.png")} />
                <View style={styles.rowText}>
                    <Text
                        style={[styles.title, {
                            color: isPlay
                                ? Purple
                                : isDarkTheme
                                    ? "white"
                                    : "black",
                            fontWeight: isPlay ? "bold" : "normal"
                        }]}
                        numberOfLines={1}>{art}</Text>
                    <Text style={styles.artist}>{title}</Text>
                </View>
                <Text style={{
                    color: isDarkTheme ? "white" : "#58596b"
                }}>{duration}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export const Content = ({ data, isDarkTheme, handlePressAudio, idCurrent }) => (
    <ScrollView>
        {data.map((item, i) => {
            const { duration, artist, title, filename, uri, id } = item
            const isPlay = idCurrent === id
            return (
                <Item
                    title={title}
                    isDarkTheme={isDarkTheme}
                    time={duration}
                    art={artist}
                    key={i}
                    onPress={() => handlePressAudio(item)}
                    filename={filename}
                    uri={uri}
                    isPlay={isPlay} />
            )
        })}
        <View style={{ width: "100%", height: 50 }} />
    </ScrollView>
)
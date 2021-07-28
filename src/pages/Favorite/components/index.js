import React from "react"
import { View, FlatList, Text, Image, ScrollView } from "react-native"

import { Layout } from "../../../components"
import { useAudioContext } from "../../../context/AudioProvider"
import { styles } from "./styles"

export default function Explore() {
    return (
        <Layout>
            <View>
                <Text>Favorite</Text>
            </View>
        </Layout>
    )
}
import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"

import { White, BackgroundColor } from "../../../assets/colors"

export default function Component({ navigation }) {
    return (
        <View style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            <Image
                style={{
                    width: "120%",
                    height: "100%"
                }}
                source={require("../../../assets/images/screen1.png")} />
            <View style={{
                position: "absolute",
                width: "50%",
                flex: 1,
                left: 30,
                bottom: 40
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: White
                }}>Hi there! Welcome to WooHo</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{
                        width: "100%",
                        flex: 1,
                        padding: 5,
                        backgroundColor: BackgroundColor
                    }}>
                        <Text style={{
                            color: White,
                            fontSize: 20
                        }}>
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
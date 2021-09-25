import React from "react";
import { View } from "react-native";

import { style } from "../style"

export default function VStack({ children }) {
    return (
        <View style={style.vstack}>
            {children}
        </View>
    )
}
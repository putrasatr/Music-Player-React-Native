import React from "react";
import { View } from "react-native";

import { style } from "../style"

export default function HStack({ children }) {
    return (
        <View style={style.hstack}>
            {children}
        </View>
    )
}
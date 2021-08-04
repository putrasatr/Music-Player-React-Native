import React from "react"
import { View, Text, Image } from "react-native"

import { Layout, SafeTextInput } from "../.."
import { styles } from "./styles"

export default function Component() {
    return (
        <Layout>
            <SafeTextInput />
        </Layout>
    )
}
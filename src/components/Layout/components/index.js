import React from "react"
import { Card } from "react-native-paper"
import { useSelector } from "react-redux"

import { useThemeContext } from "../../../context"
import { White, BackgroundColor } from "../../../assets/colors"
import { styles } from "./styles"

export default function Component({ children }) {
    const { theme } =useThemeContext()
    const isDarkTheme = theme === "dark"
    return (
        <Card style={[styles.root, {
            backgroundColor: isDarkTheme ? BackgroundColor : White,
        }]}>
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    )
}
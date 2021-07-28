import React from "react"
import { Card } from "react-native-paper"
import { useThemeContext } from "../../../context/ThemeProvider"
import { styles } from "./styles"

export default function Component({ children }) {
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    return (
        <Card style={[styles.root, {
            backgroundColor: isDarkTheme ? "#1e1b2e" : "#fff",
        }]}>
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    )
}
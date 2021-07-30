import React, { createContext, useState, useContext, useEffect } from "react"
import { useDispatch } from "react-redux";

import { SecureAsyncStorage } from "../helpers";

const ThemeContext = createContext({
    setThemeContext: () => { },
    theme: undefined
})

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")
    const setThemeContext = async (value) => {
        setTheme(value)
        await SecureAsyncStorage.setItem("theme", value)
    }
    useEffect(async () => {
        const value = await SecureAsyncStorage.getItem("theme")
        if (value) setThemeContext(value)
        else await SecureAsyncStorage.setItem("theme", theme)
        return () => clearTimeout()
    }, [SecureAsyncStorage])
    return (
        <ThemeContext.Provider value={{ setThemeContext, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
import React, { createContext, useState, useContext } from "react"


const ThemeContext = createContext({
    setTheme: () => { },
    theme: "dark"
})

export const useThemeContext = () => useContext(ThemeContext);

export default function AudioProvider({ children }) {
    const [theme, setTheme] = useState("dark")
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
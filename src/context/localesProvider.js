import React, { createContext, useState, useContext, useEffect } from "react"

import locales from "../locales"

const LoacaleContext = createContext({
    language: "eg",
    setLang: () => { }
})
export const useLocalesContext = () => useContext(LoacaleContext);

export default function LocalesProvider({ children }) {
    const [language, setLang] = useState("eg")
    const [localesVal, setLocales] = useState({})
    useEffect(() => {
        setLocales(locales[language])
        return () => { clearTimeout(1000) }
    })
    return (
        <LoacaleContext.Provider value={{ setLang, language, localesVal }}>
            {children}
        </LoacaleContext.Provider>
    )
}
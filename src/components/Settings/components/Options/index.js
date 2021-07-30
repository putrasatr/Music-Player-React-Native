import React from "react";
import { View,Text,Switch } from "react-native";

import { Purple } from "../../../../assets/colors";
import {styles} from "../styles";

export const Options = ({ isDarkTheme, handleSetTheme, setLang, isEnglish }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <Text style={{
                    color: isDarkTheme ? "white" : "black"
                }}>
                    {isEnglish ? "Dark Mode" : "Mode Gelap"}
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#f4f3f4" }}
                    thumbColor={isDarkTheme ? Purple : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleSetTheme}
                    value={isDarkTheme}
                />
            </View>
            <View style={styles.containerRow}>
                <Text style={{
                    color: isDarkTheme ? "white" : "black"
                }}>{isEnglish ? "Language" : "Bahasa"}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#f4f3f4" }}
                    thumbColor={isEnglish ? Purple : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setLang}
                    value={isEnglish}
                />
            </View>
        </View>
    );
}
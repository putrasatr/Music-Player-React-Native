import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    hstack: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        alignContent: "space-around"
    },
    vstack: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start"
    }
})
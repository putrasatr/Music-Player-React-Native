import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: 1,
        marginTop: 20
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 25
    }
})
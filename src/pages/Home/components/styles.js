import { StyleSheet } from "react-native";
import { useThemeContext } from "../../../context/ThemeProvider"
export const styles = StyleSheet.create({
    artist: {
        color: "#58596b"
    },
    container: {

    },
    col: {
        width: "100%",
        height: 90,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 10,
        padding: 10
    },
    img: {
        width: "20%",
        height: "90%",
        borderRadius: 10
    },
    rowText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "70%",
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "900",
    },
    colBottom: {
        width: "100%",
        flex:1,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,

    },
    containerBottom: {
        width: "110%",
        height: 60,
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        elevation: 50
    }
})
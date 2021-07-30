import React from "react"
import { DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { useSelector } from "react-redux";

import { useThemeContext } from "../../../context"
import { Purple, White } from '../../../assets/colors';

const Components = (props) => {
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: isDarkTheme ? "black" : "white" }}>
            <DrawerItemList activeBackgroundColor={Purple} activeTintColor={White} {...props} style={{ marginTop: 10 }} />
            <DrawerItem {...props} labelStyle={{ color: isDarkTheme ? White : "black" }} label="Logout" onPress={() => { }} />
        </DrawerContentScrollView>

    );
}
export default Components
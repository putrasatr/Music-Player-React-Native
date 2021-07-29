import React from 'react'
import { View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'

import { DrawerRouters } from '../../components';
import { styles } from './styles';
import { useThemeContext } from '../../context/ThemeProvider';
import { Purple, White } from '../../assets/colors';

const Drawer = createDrawerNavigator();

const ListDrawer = (props) => {
    const { theme } = useThemeContext()
    const isDarkTheme = theme === "dark"
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: isDarkTheme ? "black" : "white" }}>
            <DrawerItemList activeBackgroundColor={Purple} activeTintColor={White} {...props} style={{ marginTop: 10 }} />
            <DrawerItem {...props} labelStyle={{ color: isDarkTheme ? White : "black" }} label="Logout" onPress={() => { }} />
        </DrawerContentScrollView>

    );
}
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <ListDrawer  {...props} />}>
            {DrawerRouters.map(({ name, Component, title, iconName }, i) => (
                <Drawer.Screen key={i} name={name} component={Component} options={{
                    drawerLabel: ({ focused }) => (
                        <View>
                            <Text style={{ color: focused ? White : '#7E7E7E' }}>{title}</Text>
                        </View>
                    ),
                    drawerIcon: ({ focused, size }) => (
                        <View style={styles.iconBox}>
                            <Icon
                                name={iconName}
                                size={size}
                                color={focused ? White : '#2a2a2a'} />
                        </View>
                    ),
                }} />)
            )}
        </Drawer.Navigator>
    );
}

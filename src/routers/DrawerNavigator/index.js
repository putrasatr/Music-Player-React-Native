import React from 'react'
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'

import { DrawerRouters, DrawerList } from '../../components';
import { styles } from './styles';
import { White } from '../../assets/colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerList  {...props} />}>
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

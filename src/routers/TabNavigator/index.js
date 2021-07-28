import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar, BottomTabRouter } from '../../components';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} />}
        >
            {BottomTabRouter.map(({ name, Component, icon }, i) => (
                <Tab.Screen
                    key={i}
                    name={name}
                    component={Component}
                    options={{
                        icon
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}
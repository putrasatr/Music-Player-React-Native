
import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouter } from "../../components/";

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}>
            {StackRouter.map(({ name, Component }, i) => (
                <Stack.Screen name={name} component={Component} key={i} />
            ))}
        </Stack.Navigator>
    )
};

export default StackScreen
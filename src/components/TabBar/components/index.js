import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { InactiveColor, LightPurple, Purple, White } from "../../../assets/colors"

import { useLocalesContext } from "../../../context";
import locales from "../../../locales";
import { styles } from "./styles"

export default function Components({ state, descriptors, navigation }) {
    const { localesVal } = useLocalesContext()

    return (
        <LinearGradient colors={[LightPurple, Purple]} start={{ x: 0, y: 0.7 }} style={styles.root}>
            <View style={styles.container}>
                {state.routes.map(({ name, key }, index) => {
                    const { options } = descriptors[key];
                    const {
                        icon,
                        tabBarTestID,
                        tabBarAccessibilityLabel
                    } = options
                    const label = localesVal["components.bottom.tab." + name.toLowerCase()]
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={tabBarAccessibilityLabel}
                            testID={tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ display: "flex", width: "20%", height: "100%" }}
                            key={index}
                        >
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <MaterialCommunityIcons
                                    name={icon}
                                    color={isFocused ? White : InactiveColor}
                                    size={20} />
                                <Text style={{
                                    color: isFocused ? White : InactiveColor,
                                    fontWeight: isFocused ? "bold" : "normal"
                                }}>
                                    {label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
    );
}

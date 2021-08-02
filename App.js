/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import { StackScreen } from './src/routers/'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";
import { StatusBar } from "react-native";

import { AudioProvider, ThemeProvider, LocalesProvider } from "./src/context";
import { BackgroundColor } from "./src/assets/colors";

import rootReducer from './src/services/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import { loadData } from "./src/services/actions/audio";

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      setTimeout(() => console.log("Loading..."), 3000)
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  })
  return (
    <Provider store={store}>
      <LocalesProvider>
        <ThemeProvider>
          <AudioProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <StatusBar
                  barStyle="light-content"
                  backgroundColor={BackgroundColor} />
                <StackScreen />
              </NavigationContainer>
            </SafeAreaProvider>
          </AudioProvider>
        </ThemeProvider>
      </LocalesProvider>
    </Provider>
  )

}
export default App



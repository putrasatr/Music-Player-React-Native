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

import { AudioProvider, ThemeProvider, LocalesProvider } from "./src/context";

import rootReducer from './src/services/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <LocalesProvider>
        <ThemeProvider>
          <AudioProvider>
            <SafeAreaProvider>
              <NavigationContainer>
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



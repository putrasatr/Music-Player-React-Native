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

import AudioProvider from "./src/context/AudioProvider";
import ThemeProvider from "./src/context/ThemeProvider";
//  import rootReducer from './src/redux/reducers';
//  import { createStore, applyMiddleware, compose } from 'redux';
//  import createSagaMiddleware from 'redux-saga';
//  import rootSaga from './src/redux/sagas';

//  const sagaMiddleware = createSagaMiddleware();
//  const enhancer = compose(applyMiddleware(sagaMiddleware));
//  const store = createStore(rootReducer, enhancer);

//  sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <ThemeProvider>
      <AudioProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </AudioProvider>
    </ThemeProvider>
  )

}
export default App



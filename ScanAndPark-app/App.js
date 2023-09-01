import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootStack from './app/routes';
import store from './app/store';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </Provider>
);

export default App;

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthStack from './navigators/AuthNavigator';
import AppStack from './navigators/AppNavigator';
import SplashStack from './navigators/SplashNavigator';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={SplashStack}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="AuthStack"
      component={AuthStack}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="AppStack"
      component={AppStack}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default RootStack;

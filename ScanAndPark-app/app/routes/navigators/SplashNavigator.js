import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../../modules/user/components/Splash';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../modules/user/components/Login';
import Register from '../../modules/user/components/Register';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;

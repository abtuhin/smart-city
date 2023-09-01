import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Parkings from '../../modules/parking/components/Parkings';
import Scanner from '../../modules/parking/components/Scanner';
import Profile from '../../modules/user/components/Profile';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const AppStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1d7dc9',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}
    tabBar={props => <TabBar {...props} />}>
    <Tab.Screen
      name="Parkings"
      component={Parkings}
      options={{title: 'Available Parkings'}}
    />
    <Tab.Screen
      name="UserProfile"
      component={Profile}
      options={{title: 'Profile'}}
    />
    <Tab.Screen
      name="Scanner"
      component={Scanner}
      options={{title: 'Scanner', headerShown: false}}
    />
  </Tab.Navigator>
);

export default AppStack;

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {syncUserFromStorage} from '../actions';

const SplashComponent = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const syncUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        await dispatch(syncUserFromStorage(JSON.parse(user)));
        navigation.navigate('AppStack');
      } else {
        navigation.navigate('AuthStack');
      }
    };
    syncUser();
  }, [dispatch, navigation]);

  return (
    <View style={$$.container}>
      <View>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={$$.loading}>Loading...</Text>
      </View>
    </View>
  );
};

export default SplashComponent;

const $$ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D63F48',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loading: {
    fontSize: 14,
    color: '#fff',
    paddingTop: 10,
  },
});

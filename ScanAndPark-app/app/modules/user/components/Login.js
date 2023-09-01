import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser, syncUserFromStorage} from '../actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      const response = await dispatch(loginUser({email, password}));
      await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await dispatch(syncUserFromStorage(response.data.data));
      navigation.navigate('Parkings');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={$$.container}>
      <Input
        placeholder="Enter your email"
        leftIcon={{type: 'font-awesome', name: 'envelope'}}
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Enter your password"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        style={$$.emailInput}
        onChangeText={value => setPassword(value)}
      />
      <Button
        containerStyle={$$.btn}
        title="Login"
        loading={false}
        onPress={onSubmit}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={$$.link}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const $$ = StyleSheet.create({
  btn: {
    alignSelf: 'stretch',
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: 20,
    color: '#4b54ad',
    fontWeight: 'bold',
  },
});

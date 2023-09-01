import React, {useState} from 'react';
import {StyleSheet, Alert, View, TouchableOpacity} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {registerUser} from '../actions';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        Alert.alert('Password did not match');
        return;
      }
      const reqBody = {
        user: {
          firstname,
          lastname,
          fullname: firstname + ' ' + lastname,
          email,
          password,
        },
        roleId: 2,
      };
      const response = await dispatch(registerUser(reqBody));
      console.log(response);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={$$.container}>
      <Input
        placeholder="Enter your first name"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setFirstname(value)}
      />
      <Input
        placeholder="Enter your last name"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setLastname(value)}
      />
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
      <Input
        placeholder="Confirm your password"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        style={$$.emailInput}
        onChangeText={value => setConfirmPassword(value)}
      />
      <Button
        containerStyle={$$.btn}
        title="Register"
        loading={false}
        onPress={onSubmit}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={$$.link}>Go back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const $$ = StyleSheet.create({
  btn: {
    alignSelf: 'stretch',
    marginHorizontal: 8,
  },
  link: {
    margin: 20,
    color: '#4b54ad',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

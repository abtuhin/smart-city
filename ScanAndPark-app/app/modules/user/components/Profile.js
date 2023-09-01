import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const user = useSelector(store => store.user.user);
  const onLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('AuthStack');
  };

  return (
    <View style={$$.container}>
      <Card>
        <Card.Title>{user.fullname}</Card.Title>
        <Card.Title>
          <Text>Email: {user.email}</Text>
        </Card.Title>
        <Card.Title>
          <Text>Status: {user.status}</Text>
        </Card.Title>
        <Button title="Logout" onPress={onLogout} />
      </Card>
    </View>
  );
};

export default Profile;

const $$ = StyleSheet.create({
  container: {
    flex: 1,
  },
});

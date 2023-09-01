import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import React from 'react';

const TabBar = ({navigation}) => {
  return (
    <View style={$$.wrapper}>
      <Button
        containerStyle={[$$.item, {paddingRight: 1}]}
        title="Parkings"
        onPress={() => {
          navigation.navigate('Parkings');
        }}
      />
      <Button
        containerStyle={[$$.item, {paddingLeft: 1}]}
        title="Profile"
        onPress={() => {
          navigation.navigate('UserProfile');
        }}
      />
    </View>
  );
};

const $$ = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
  },
});

export default TabBar;

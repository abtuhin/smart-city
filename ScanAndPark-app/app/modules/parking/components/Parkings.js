import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {getParkings, getBookings} from '../actions';

const Parkings = ({navigation}) => {
  const dispatch = useDispatch();
  const parkings = useSelector(store => store.parking.parkings);
  const bookings = useSelector(store => store.parking.bookings);
  const user = useSelector(store => store.user.user);

  useEffect(() => {
    const callParkingsWithBookings = async () => {
      try {
        await dispatch(getParkings());
        await dispatch(getBookings());
      } catch (error) {
        console.log(error);
      }
    };
    callParkingsWithBookings();
  }, [dispatch]);

  const openScanner = (status = 'EMPTY') =>
    navigation.navigate('Scanner', {status});

  const renderScanButton = () => {
    if (
      bookings.every(
        item => item.userId === user.id && item.status === 'FINISHED',
      )
    ) {
      return (
        <Button
          containerStyle={$$.scan}
          title="BOOK A SLOT"
          onPress={() => openScanner()}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView>
      {renderScanButton()}
      {parkings.map((parking, i) => {
        return (
          <Card key={i}>
            <View style={$$.itemWrap}>
              <Card.Title>{parking.address}</Card.Title>
              {parking.status === 'OCCUPIED' && (
                <Button
                  title="UNBOOK"
                  onPress={() => openScanner(parking.status)}
                />
              )}
            </View>
            <Text>Status: {parking.status}</Text>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const $$ = StyleSheet.create({
  scan: {
    margin: 15,
  },
  itemWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Parkings;

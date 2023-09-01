import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {bookSlot, unBookSlot, getParkings, getBookings} from '../actions';

const Scanner = ({navigation, route}) => {
  const dispatch = useDispatch();
  const status = route.params.status;
  const onSuccess = async scan => {
    try {
      if (status === 'OCCUPIED') {
        await dispatch(unBookSlot({qrCode: scan.data}));
      } else if (status === 'EMPTY') {
        await dispatch(bookSlot({qrCode: scan.data}));
      }
      await dispatch(getParkings());
      await dispatch(getBookings());
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={1000}
        fadeIn
        checkAndroid6Permissions={true}
        topContent={
          <Text style={$$.centerText}>
            Scan QR code to {status === 'OCCUPIED' ? 'UNBOOK' : 'BOOK'} this
            slot
          </Text>
        }
      />
    </>
  );
};

export default Scanner;

const $$ = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

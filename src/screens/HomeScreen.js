/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../models/AuthProvider';

const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Text style={{marginTop: 10}}>Currently Logged In As: {user.email}</Text>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View} from 'react-native';
import Quiz from './Quiz';
import {COLORS} from '../constants';

const HomeScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.background,
    }}>
    <Quiz />
  </View>
);

export default HomeScreen;

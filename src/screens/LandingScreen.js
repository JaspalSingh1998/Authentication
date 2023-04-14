/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../constants';
const {height} = Dimensions.get('window');

const LandingScreen = ({navigation}) => {
  console.log(FONTS);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{height: height / 3}}
          source={require('../assets/hero.png')}
        />
        <View
          style={{
            paddingHorizontal: SIZES.base * 4,
            paddingTop: SIZES.base * 4,
          }}>
          <Text
            style={{
              fontSize: FONTS.xxLarge,
              color: COLORS.secondary,
              textAlign: 'center',
            }}>
            Secure Your Feelings Here
          </Text>
          <Text
            style={{
              fontSize: FONTS.small,
              color: COLORS.text,
              textAlign: 'center',
              marginTop: SIZES.base * 2,
            }}>
            Write down your personal, professional and travel stories with us
            without worrying about the privacy, we have got you covered with
            secure and robus authentication system.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.base * 2,
            paddingTop: SIZES.base * 6,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: COLORS.secondary,
              paddingVertical: SIZES.base * 1.5,
              paddingHorizontal: SIZES.base * 2,
              width: '48%',
              borderRadius: SIZES.base,
              shadowColor: COLORS.primary,
              shadowOffset: {
                width: 0,
                height: SIZES.base,
              },
              shadowOpacity: 0.3,
              shadowRadius: SIZES.base,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: FONTS.large,
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{
              paddingVertical: SIZES.base * 1.5,
              paddingHorizontal: SIZES.base * 2,
              width: '48%',
              borderRadius: SIZES.base,
            }}>
            <Text
              style={{
                color: COLORS.text,
                fontSize: FONTS.large,
                textAlign: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

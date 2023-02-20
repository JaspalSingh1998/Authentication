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
import Spacing from '../constants/spacing';
import fonts from '../constants/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {height} = Dimensions.get('window');

const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{height: height / 3}}
          source={require('../assets/hero.png')}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}>
          <Text
            style={{
              fontSize: fonts.xxLarge,
              color: Colors.primary,
              textAlign: 'center',
            }}>
            Secure Your Feelings Here
          </Text>
          <Text
            style={{
              fontSize: fonts.small,
              color: Colors.text,
              textAlign: 'center',
              marginTop: Spacing * 2,
            }}>
            Write down your personal, professional and travel stories with us
            without worrying about the privacy, we have got you covered with
            secure and robus authentication system.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: '48%',
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}>
            <Text
              style={{
                color: Colors.onPrimary,
                fontSize: fonts.large,
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: '48%',
              borderRadius: Spacing,
            }}>
            <Text
              style={{
                color: Colors.text,
                fontSize: fonts.large,
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

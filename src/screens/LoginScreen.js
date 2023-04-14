/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS, SIZES, FONTS} from '../constants';
import AppTextInput from '../components/AppTextInput';
import {AuthContext} from '../models/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleSignIn() {
    signIn(email, password);
  }
  return (
    <SafeAreaView>
      <View style={{padding: SIZES.base * 2}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: FONTS.xLarge,
              color: COLORS.primary,
              marginVertical: SIZES.base * 3,
            }}>
            Login Here
          </Text>
          <Text
            style={{
              fontSize: FONTS.large,
              maxWidth: '60%',
              textAlign: 'center',
            }}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: SIZES.base * 3,
          }}>
          <AppTextInput
            keyboardType="email-address"
            placeholder="Email"
            handleChange={value => setEmail(value)}
          />
          <AppTextInput
            secureTextEntry={true}
            placeholder="Password"
            handleChange={value => setPassword(value)}
          />
        </View>
        <TouchableOpacity
          onPress={handleSignIn}
          style={{
            padding: SIZES.base * 2,
            backgroundColor: COLORS.secondary,
            marginVertical: SIZES.base * 3,
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
              textAlign: 'center',
              fontSize: FONTS.large,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            padding: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.text,
              textAlign: 'center',
              fontSize: FONTS.small,
            }}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Spacing from '../constants/spacing';
import fonts from '../constants/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppTextInput from '../components/AppTextInput';
import {AuthContext} from '../models/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  function handleSignIn() {
    login(email, password);
  }
  return (
    <SafeAreaView>
      <View style={{padding: Spacing * 2}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fonts.xLarge,
              color: Colors.primary,
              marginVertical: Spacing * 3,
            }}>
            Login Here
          </Text>
          <Text
            style={{
              fontSize: fonts.large,
              maxWidth: '60%',
              textAlign: 'center',
            }}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
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
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
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
              textAlign: 'center',
              fontSize: fonts.large,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            padding: Spacing,
          }}>
          <Text
            style={{
              color: Colors.text,
              textAlign: 'center',
              fontSize: fonts.small,
            }}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

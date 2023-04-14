/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useContext} from 'react';
import {COLORS, SIZES, FONTS} from '../constants';
import AppTextInput from '../components/AppTextInput';
import {AuthContext} from '../models/AuthProvider';

const RegisterScreen = ({navigation}) => {
  const {signUp} = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            Create account
          </Text>
          <Text
            style={{
              fontSize: FONTS.large,
              maxWidth: '80%',
              textAlign: 'center',
            }}>
            Create an account so you can secure your stories with us
          </Text>
        </View>
        <View
          style={{
            marginVertical: SIZES.base * 3,
          }}>
          <AppTextInput
            placeholder="First Name"
            handleChange={value => setFirstName(value)}
          />
          <AppTextInput
            placeholder="Last Name"
            handleChange={value => setLastName(value)}
          />
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
          onPress={() => signUp(firstName, lastName, email, password)}
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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            padding: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.text,
              textAlign: 'center',
              fontSize: FONTS.small,
            }}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
      <View style={{padding: Spacing * 2}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fonts.xLarge,
              color: Colors.primary,
              marginVertical: Spacing * 3,
            }}>
            Create account
          </Text>
          <Text
            style={{
              fontSize: fonts.large,
              maxWidth: '80%',
              textAlign: 'center',
            }}>
            Create an account so you can secure your stories with us
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            padding: Spacing,
          }}>
          <Text
            style={{
              color: Colors.text,
              textAlign: 'center',
              fontSize: fonts.small,
            }}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

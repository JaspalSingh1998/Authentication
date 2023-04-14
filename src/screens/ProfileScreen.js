/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../models/AuthProvider';

const ProfileScreen = () => {
  const {signOut, user} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
          textAlign: 'center',
        }}>
        You are currently logged in with Following User
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10}}>
        Username: {user.email}
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10}}>
        Email address: {user.email}
      </Text>
      <View style={styles.userBtnWrapper}>
        <TouchableOpacity style={styles.userBtn} onPress={() => signOut()}>
          <Text style={styles.userBtnTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  userBtn: {
    backgroundColor: '#1E90FF',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#ffffff',
  },
});

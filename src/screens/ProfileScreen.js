/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../models/AuthProvider';
import {COLORS, SIZES} from '../constants';

const ProfileScreen = () => {
  const {signOut, user} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
      }}>
      <Image
        source={require('../assets/DottedBG.png')}
        style={{
          width: SIZES.width,
          height: 140,
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5,
        }}
        resizeMode={'contain'}
      />
      <Image
        source={{uri: 'https://i.pravatar.cc/200'}}
        style={{width: 200, height: 200, borderRadius: 100}}
      />
      <Text
        style={{
          marginVertical: 20,
          fontSize: 32,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        {user.displayName}
      </Text>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        {user.email}
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
    marginVertical: 40,
  },
  userBtn: {
    backgroundColor: '#1E90FF',
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

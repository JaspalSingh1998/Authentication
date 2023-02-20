/* eslint-disable react-native/no-inline-styles */
import {TextInput} from 'react-native';
import React, {useState} from 'react';
import Spacing from '../constants/spacing';
import fonts from '../constants/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function AppTextInput({handleChange, ...otherProps}) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onChangeText={value => handleChange(value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontSize: fonts.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: {width: 4, height: Spacing},
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
}

export default AppTextInput;

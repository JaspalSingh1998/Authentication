/* eslint-disable react-native/no-inline-styles */
import {TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS} from '../constants';

function AppTextInput({handleChange, ...otherProps}) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onChangeText={value => handleChange(value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={COLORS.black}
      style={[
        {
          fontSize: FONTS.small,
          padding: SIZES.base * 2,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.base,
          marginVertical: SIZES.base,
        },
        focused && {
          borderWidth: 3,
          borderColor: COLORS.primary,
          shadowOffset: {width: 4, height: SIZES.base},
          shadowColor: COLORS.primary,
          shadowOpacity: 0.2,
          shadowRadius: SIZES.base,
        },
      ]}
      {...otherProps}
    />
  );
}

export default AppTextInput;

import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  fonts: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
    semiBold: 'OpenSans-SemiBold',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
};

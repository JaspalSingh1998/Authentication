import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '../theme/theme';
import {AuthProvider} from '../models/AuthProvider';
import Routes from './routes';

const Providers = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

export default Providers;

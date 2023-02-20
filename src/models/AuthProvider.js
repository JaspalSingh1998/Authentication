import React, {useState, createContext} from 'react';
import {login, register, logout} from '../controllers/AuthController';
// import auth from '@react-native-firebase/auth';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn: login,
        signUp: register,
        signOut: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

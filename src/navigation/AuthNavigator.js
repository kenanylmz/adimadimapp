import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import {useTheme} from '../context/ThemeContext';

const Stack = createStackNavigator();

const AuthNavigator = ({setLoginStatus}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        children={props => (
          <LoginScreen {...props} setLoginStatus={setLoginStatus} />
        )}
      />
      <Stack.Screen
        name="Register"
        children={props => (
          <RegisterScreen {...props} setLoginStatus={setLoginStatus} />
        )}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

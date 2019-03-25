import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const Login = createStackNavigator({
    Login: LoginScreen,
  });

export default Login;
import React, {useState, useEffect, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Bu fonksiyon, onboarding sonrasında çağrılacak
  const checkAppState = async () => {
    try {
      const launchedBefore = await AsyncStorage.getItem('hasLaunchedBefore');
      const loggedInUser = await AsyncStorage.getItem('user');

      if (launchedBefore === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }

      if (loggedInUser !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Failed to check app launch status:', error);
      setIsFirstLaunch(false);
      setIsLoading(false);
    }
  };

  // Component mount olduğunda çalışacak
  useEffect(() => {
    checkAppState();
  }, []);

  // Kullanıcı girişi durumunu güncelleme fonksiyonu
  const setLoginStatus = async status => {
    try {
      if (status) {
        // Login başarılı olduğunda
        await AsyncStorage.setItem('user', 'logged-in');
      } else {
        // Logout olduğunda
        await AsyncStorage.removeItem('user');
      }
      setIsLoggedIn(status);
    } catch (error) {
      console.error('Failed to update login status:', error);
    }
  };

  // OnboardingScreen'e geçtiğimiz props
  const onboardingProps = {
    onOnboardingComplete: async () => {
      try {
        await AsyncStorage.setItem('hasLaunchedBefore', 'true');
        // State'i güncelle
        setIsFirstLaunch(false);
      } catch (error) {
        console.error('Failed to save onboarding status', error);
      }
    },
  };

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isFirstLaunch ? (
        <Stack.Screen
          name="Onboarding"
          options={{gestureEnabled: false}} // Geri dönüşü engelle
          children={props => (
            <OnboardingScreen {...props} {...onboardingProps} />
          )}
        />
      ) : isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen
          name="Auth"
          children={props => (
            <AuthNavigator {...props} setLoginStatus={setLoginStatus} />
          )}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;

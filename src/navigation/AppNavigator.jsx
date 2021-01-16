import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// screen
import { MainTabNavigator } from './MainTabNavigator';

export const AppNavigator = () => {
    return(
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
    );
};
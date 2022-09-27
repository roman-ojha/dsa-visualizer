import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeRoutes from './HomeStack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="homeRoute" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

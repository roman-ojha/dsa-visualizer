import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import VisualizerStack from './Visualizer';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="visualizer" component={VisualizerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

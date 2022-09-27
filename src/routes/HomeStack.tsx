import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LinkedListVisualizer from '../screens/LinkedListVisualizer';
import PathFinder from '../screens/PathFinder';
import QueueVisualizer from '../screens/QueueVisualizer';
import SortingVisualizer from '../screens/SortingVisualizer';
import StackVisualizer from '../screens/StackVisualizer';
import Home from '../screens/Home';

export type HomeStackParamList = {
  home: undefined;
  sortingVisualizer: undefined;
  pathFinder: undefined;
  stackVisualizer: undefined;
  queueVisualizer: undefined;
  linkedListVisualizer: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen
        name="sortingVisualizer"
        component={SortingVisualizer}
      />
      <HomeStack.Screen name="pathFinder" component={PathFinder} />
      <HomeStack.Screen name="stackVisualizer" component={StackVisualizer} />
      <HomeStack.Screen name="queueVisualizer" component={QueueVisualizer} />
      <HomeStack.Screen
        name="linkedListVisualizer"
        component={LinkedListVisualizer}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;

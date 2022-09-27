import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LinkedListVisualizer from '../screens/LinkedListVisualizer';
import PathFinder from '../screens/PathFinder';
import QueueVisualizer from '../screens/QueueVisualizer';
import SortingVisualizer from '../screens/SortingVisualizer';
import StackVisualizer from '../screens/StackVisualizer';

const VisualizerStack = createStackNavigator();

const Visualizer = () => {
  return (
    <VisualizerStack.Navigator>
      <VisualizerStack.Screen
        name="sortingVisualizer"
        component={SortingVisualizer}
      />
      <VisualizerStack.Screen name="pathFinder" component={PathFinder} />
      <VisualizerStack.Screen
        name="stackVisualizer"
        component={StackVisualizer}
      />
      <VisualizerStack.Screen
        name="queueVisualizer"
        component={QueueVisualizer}
      />
      <VisualizerStack.Screen
        name="linkedListVisualizer"
        component={LinkedListVisualizer}
      />
    </VisualizerStack.Navigator>
  );
};

export default Visualizer;

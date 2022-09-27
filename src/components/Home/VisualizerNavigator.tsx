import React from 'react';
import Button from './Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../routes/HomeStack';
import {ButtonProps as ButtonTypes} from './Button';

interface ButtonsProps {
  navigation: StackNavigationProp<HomeStackParamList, 'home'>;
}

const Buttons: React.FC<ButtonsProps> = ({navigation}): JSX.Element => {
  const buttonsInfo: ButtonTypes[] = [
    {
      title: 'Sorting Visualizer',
      icon: 'wave',
      from: 'customIcons',
      size: 30,
      navigateToVisualizer: () => navigation.navigate('sortingVisualizer'),
    },
    {
      title: 'Path finder',
      icon: 'graph',
      from: 'customIcons',
      size: 30,
      navigateToVisualizer: () => navigation.navigate('pathFinder'),
    },
    {
      title: 'Stack Visualizer',
      icon: 'stack',
      from: 'customIcons',
      size: 30,
      navigateToVisualizer: () => navigation.navigate('stackVisualizer'),
    },
    {
      title: 'Queue Visualizer',
      icon: 'people-queue',
      from: 'customIcons',
      size: 30,
      navigateToVisualizer: () => navigation.navigate('queueVisualizer'),
    },
    {
      title: 'Linked List Visualizer',
      icon: 'project-diagram',
      from: 'fontAwesome',
      size: 30,
      navigateToVisualizer: () => navigation.navigate('linkedListVisualizer'),
    },
  ];

  return (
    <>
      {buttonsInfo.map(buttonInfo => (
        <Button
          key={buttonInfo.title}
          title={buttonInfo.title}
          icon={buttonInfo.icon}
          from={buttonInfo.from}
          size={buttonInfo.size}
          navigateToVisualizer={buttonInfo.navigateToVisualizer}
        />
      ))}
    </>
  );
};

export default Buttons;

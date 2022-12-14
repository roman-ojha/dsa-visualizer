import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import CustomIcons from '../CustomIcons/CustomIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import constants from '../../constants';

export interface ButtonProps {
  title: string;
  icon: string;
  from: 'fontAwesome' | 'customIcons';
  size: number;
  navigateToVisualizer: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  from,
  size,
  navigateToVisualizer,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={navigateToVisualizer}
      style={styles.container}
      activeOpacity={0.85}>
      {from === 'customIcons' ? (
        <CustomIcons name={icon} size={size} style={styles.icon} />
      ) : from === 'fontAwesome' ? (
        <FontAwesome name={icon} size={size} style={styles.icon} />
      ) : (
        ''
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: constants.styles.colors.primary[700],
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'black',
    marginLeft: 5,
  },
  title: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
});

export default Button;

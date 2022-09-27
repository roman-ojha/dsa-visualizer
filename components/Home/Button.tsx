import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CustomIcons from '../CustomIcons/CustomIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
  title: string;
  icon: string;
  from: 'fontAwesome' | 'customIcons';
  size: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  from,
  size,
}): JSX.Element => {
  return (
    <TouchableOpacity>
      <View>
        {from === 'customIcons' ? (
          <CustomIcons name={icon} color="black" size={size} />
        ) : from === 'fontAwesome' ? (
          <FontAwesome name={icon} color="black" size={size} />
        ) : (
          ''
        )}
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;

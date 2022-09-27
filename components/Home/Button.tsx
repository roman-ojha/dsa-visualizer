import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  title: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({title, icon}): JSX.Element => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{title}</Text>
        <Text>{icon}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;

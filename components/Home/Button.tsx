import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/App';
import {createIconSet} from 'react-native-vector-icons';
const Icon = createIconSet(
  {
    stack: 90,
  },
  'app-icons',
  'app-icons.ttf',
);

interface ButtonProps {
  title: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({title, icon}): JSX.Element => {
  return (
    <TouchableOpacity>
      <View>
        {/* <MaterialIcons name="delete" color="black" size={18} /> */}
        <Icon name="stack" />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;

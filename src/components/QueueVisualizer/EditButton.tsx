import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {screenConst} from '../../constants';
import CustomIcons from '../CustomIcons/CustomIcons';

const EditButton: React.FC<{width: number}> = ({width}): JSX.Element => {
  return (
    <View style={[styles.container, {width}]}>
      <TouchableOpacity style={styles.buttonContainer}>
        <CustomIcons
          name="arrow-circle"
          color="black"
          size={25}
          style={styles.icon}
        />
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    transform: [{rotate: '90deg'}],
  },
  text: {
    fontSize: 20,
    color: 'black',
    transform: [{rotate: '-90deg'}],
  },
});

export default EditButton;

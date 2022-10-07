import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {screenConst} from '../../constants';
import CustomIcons from '../CustomIcons/CustomIcons';

const EditFooter = (): JSX.Element => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <CustomIcons
          name="arrow-circle"
          color="black"
          size={25}
          style={styles.icon}
        />
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    transform: [{rotate: '180deg'}],
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default EditFooter;

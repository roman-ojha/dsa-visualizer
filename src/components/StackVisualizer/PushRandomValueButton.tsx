import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {screenConst, stylesConst} from '../../constants';

const PushRandomValueButton = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.text}>Push random value</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    width: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 7,
  },
  text: {
    color: stylesConst.colors.font[0],
  },
});

export default PushRandomValueButton;

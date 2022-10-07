import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {screenConst} from '../../constants';
import CustomIcons from '../CustomIcons/CustomIcons';

const InputValue = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputValueFieldContainer}>
          <CustomIcons
            name="stack"
            size={20}
            color="black"
            style={styles.stackIcon}
          />
          <TextInput
            style={styles.inputValueField}
            placeholder="Insert Value"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputValueFieldContainer: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#929292',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  stackIcon: {
    marginHorizontal: 10,
  },
  inputValueField: {
    marginRight: 10,
    width: 120,
    height: 45,
    fontSize: 15,
  },
});

export default InputValue;

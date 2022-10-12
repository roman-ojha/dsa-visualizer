import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CustomIcons from '../CustomIcons/CustomIcons';
import {useSelector, useDispatch} from 'react-redux';
import {AppState, actionCreators} from '../../redux';
import {bindActionCreators} from 'redux';

const InputValue = (): JSX.Element => {
  const value = useSelector((state: AppState) => state.inputValueReducer);
  const {changeInputValue} = bindActionCreators(actionCreators, useDispatch());
  return (
    <View style={styles.inputValueFieldContainer}>
      <CustomIcons
        name="stack"
        size={20}
        color="black"
        style={styles.stackIcon}
      />
      <TextInput
        style={styles.inputValueField}
        placeholder="Enqueue Value"
        keyboardType="number-pad"
        value={value}
        onChangeText={text => {
          changeInputValue(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

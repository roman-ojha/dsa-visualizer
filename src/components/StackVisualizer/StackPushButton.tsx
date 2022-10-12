import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, AppState} from '../../redux';

const StackPushButton = (): JSX.Element => {
  const value = useSelector((state: AppState) => state.inputValueReducer);
  const {pushIntoStack, changeInputValue} = bindActionCreators(
    actionCreators,
    useDispatch(),
  );

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (value) {
            pushIntoStack(parseInt(value, 10));
            changeInputValue('');
          }
        }}>
        <Ionicons name="push" color="white" size={20} style={styles.icon} />
        <Text style={styles.text}>Push</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#212121',
    borderRadius: 5,
  },
  icon: {
    transform: [{rotate: '180deg'}],
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

export default StackPushButton;

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, AppState} from '../../redux';

const StackPushButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {pushIntoStack} = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          // pushIntoStack();
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

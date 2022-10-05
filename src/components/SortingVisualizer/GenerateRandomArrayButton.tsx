import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {actionCreators, AppState} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {stylesConst} from '../../constants';

const GenerateRandomArrayButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {status} = useSelector((state: AppState) => state.sortingVisualizer);
  const {generateRandomSortingArray} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        // status === 'started&&sorting'
        //   ? {backgroundColor: stylesConst.colors.button.after}
        //   : {backgroundColor: stylesConst.colors.button.before},
      ]}
      disabled={status === 'started&&sorting' ? true : false}
      onPress={() => {
        if (status === 'init||finished') {
          generateRandomSortingArray();
        }
      }}>
      <Text style={styles.text}>Generate Random Array</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  text: {
    color: stylesConst.colors.font[0],
  },
});

export default GenerateRandomArrayButton;

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../../redux';
import {stylesConst} from '../../constants';

const SortButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {sortArray} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <TouchableOpacity style={styles.sortButton} onPress={sortArray}>
        <Text style={styles.sortButtonText}>Sort</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
    width: 100,
  },
  sortButtonText: {
    color: stylesConst.colors.font[0],
  },
});

export default SortButton;

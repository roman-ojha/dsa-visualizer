import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators, AppState} from '../../redux';
import {stylesConst} from '../../constants';
import useSort from '../../hooks/sorts/useSorts';

const SortButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {status} = useSelector((state: AppState) => state.sortingVisualizer);
  const sort = useSort();

  const {changeSortingStatus} = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.sortButton,
          // status === 'started&&sorting'
          //   ? {backgroundColor: stylesConst.colors.button.after}
          //   : {backgroundColor: stylesConst.colors.button.before},
        ]}
        disabled={status === 'started&&sorting' ? true : false}
        onPress={async () => {
          if (status === 'init||finished') {
            changeSortingStatus('started&&sorting');
            await sort();
          }
        }}>
        <Text style={styles.button}>
          {status === 'started&&sorting'
            ? 'Sorting'
            : status === 'init||finished'
            ? 'Sort'
            : ''}
        </Text>
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
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  button: {
    color: stylesConst.colors.font[0],
  },
});

export default SortButton;

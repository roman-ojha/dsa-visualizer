import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import CheckBox from '@react-native-community/checkbox';
import {stylesConst} from '../../../constants';

const SortingOrderPicker = (): JSX.Element => {
  const dispatch = useDispatch();
  const {order} = useSelector((state: AppState) => state.sortingVisualizer);
  const {changeSortingOrder} = bindActionCreators(actionCreators, dispatch);
  return (
    <View style={styles.choseAlgorithmContainer}>
      <Text style={styles.selectAlgorithmText}>Select Order:</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.ascendingContainer}>
          <CheckBox
            value={order === 'ascending' ? true : false}
            tintColors={{
              false: 'white',
              true: stylesConst.colors.primary[1000],
            }}
            onChange={() => {
              changeSortingOrder('ascending');
            }}
          />
          <Text style={styles.ascendingText}>Ascending</Text>
        </View>
        <View style={styles.descendingContainer}>
          <CheckBox
            value={order === 'descending' ? true : false}
            tintColors={{
              false: 'white',
              true: stylesConst.colors.primary[1000],
            }}
            onChange={() => {
              changeSortingOrder('descending');
            }}
          />
          <Text style={styles.descendingText}>Descending</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  choseAlgorithmContainer: {
    display: 'flex',
  },
  selectAlgorithmText: {
    color: 'white',
    margin: 10,
    fontSize: 15,
  },
  checkBoxContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ascendingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ascendingText: {
    color: 'white',
  },
  descendingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descendingText: {
    color: 'white',
  },
});

export default SortingOrderPicker;

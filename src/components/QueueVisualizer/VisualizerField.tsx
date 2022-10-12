import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {stylesConst} from '../../constants';
import DequeueButton from './DequeueButton';
import EnqueueButton from './EnqueueButton';
import {AppState} from '../../redux';
import {useSelector} from 'react-redux';

const arraySingleBoxSize = 33;

const VisualizerField = (): JSX.Element => {
  const {queue, front, rare} = useSelector(
    (state: AppState) => state.queueVisualizer,
  );
  const centerOfSingleArray = arraySingleBoxSize / 2 - 8;
  const totalArrayToTravelByEnqueue = arraySingleBoxSize * (rare + 1);
  //  1 is margin between array
  const totalArrayMarginToTravelByEnqueue = 1 * (rare * 2 + 2);

  const totalArrayToTravelByDequeue = arraySingleBoxSize * front;
  //  1 is margin between array
  const totalArrayMarginToTravelByDequeue = 1 * (front * 2 + 2);

  return (
    <View style={styles.container}>
      <EnqueueButton
        translateX={
          centerOfSingleArray +
          totalArrayToTravelByEnqueue +
          totalArrayMarginToTravelByEnqueue
        }
      />
      <View style={styles.arrayContainer}>
        {queue.map((elm, index) => {
          return (
            <View key={index} style={styles.arraySingleBox}>
              <Text style={styles.textElm}>{elm}</Text>
            </View>
          );
        })}
      </View>
      <DequeueButton
        translateX={
          centerOfSingleArray +
          totalArrayToTravelByDequeue +
          totalArrayMarginToTravelByDequeue
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'stretch',
  },
  arrayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arraySingleBox: {
    backgroundColor: stylesConst.colors.primary[1000],
    margin: 1,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: arraySingleBoxSize,
    height: arraySingleBoxSize,
  },
  textElm: {
    fontWeight: '700',
    fontSize: 15,
  },
});

export default VisualizerField;

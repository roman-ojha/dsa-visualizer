import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst, stylesConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const StackField = (): JSX.Element => {
  const {stack} = useSelector((state: AppState) => state.stackVisualizer);

  return (
    <>
      <View style={styles.container}>
        {stack.map((item, index) => (
          <View key={index} style={styles.stackContainer}>
            <Text style={styles.stackValue}>{item}</Text>
            <Text style={styles.stackIndex}>({index})</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth - 155,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
  stackContainer: {
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesConst.colors.primary[1000],
    borderRadius: 10,
    marginBottom: 5,
  },
  stackValue: {
    fontWeight: '700',
    fontSize: 17,
    marginRight: 5,
  },
  stackIndex: {
    fontWeight: '600',
    color: 'black',
  },
});

export default StackField;

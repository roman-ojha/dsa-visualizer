import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst, stylesConst} from '../../constants';

const StackField = (): JSX.Element => {
  const [stack, setStack] = useState([
    10, 20, 15, 11, 21, 30, 21, 97, 23, 78, 99, 102, 211,
  ]);
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

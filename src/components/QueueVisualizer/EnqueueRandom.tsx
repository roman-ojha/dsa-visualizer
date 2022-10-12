import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {stylesConst} from '../../constants';

const EnqueueRandom = (): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.enqueueRandomValueButtonContainer]}>
      <FontAwesome5Icon
        name="walking"
        color="white"
        style={styles.enqueueRandomValueIcon}
        size={15}
      />
      <Text style={styles.enqueueRandomValueText}>Enqueue random value</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  enqueueRandomValueButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#212121',
    borderRadius: 5,
    position: 'absolute',
    right: 0,
  },
  enqueueRandomValueText: {
    color: stylesConst.colors.font[0],
    fontSize: 15,
  },
  enqueueRandomValueIcon: {
    marginRight: 5,
  },
});

export default EnqueueRandom;

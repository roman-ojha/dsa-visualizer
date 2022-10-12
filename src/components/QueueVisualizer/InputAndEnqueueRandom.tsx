import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {stylesConst} from '../../constants';
import CustomIcons from '../CustomIcons/CustomIcons';

const InputValue = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inputValueFieldContainer}>
        <CustomIcons
          name="stack"
          size={20}
          color="black"
          style={styles.stackIcon}
        />
        <TextInput
          style={styles.inputValueField}
          placeholder="Insert Value"
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity style={[styles.enqueueRandomValueButtonContainer]}>
        <FontAwesome5Icon
          name="walking"
          color="white"
          style={styles.enqueueRandomValueIcon}
          size={15}
        />
        <Text style={styles.enqueueRandomValueText}>Enqueue random value</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  inputValueFieldContainer: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#929292',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  stackIcon: {
    marginHorizontal: 10,
  },
  inputValueField: {
    marginRight: 10,
    width: 120,
    height: 45,
    fontSize: 15,
  },
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

export default InputValue;

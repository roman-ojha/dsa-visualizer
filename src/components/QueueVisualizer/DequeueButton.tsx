import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {stylesConst} from '../../constants';

const DequeueButton: React.FC<{translateX: number}> = ({
  translateX,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={[styles.movableViewContainer, {transform: [{translateX}]}]}>
        <AntDesignIcon name="arrowup" color="black" />
        <TouchableOpacity style={[styles.buttonContainer]}>
          <FontAwesome5Icon name="walking" color="white" style={styles.icon} />
          <Text style={styles.text}>Dequeue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'blue',
    height: 50,
  },
  movableViewContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#212121',
    borderRadius: 5,
  },
  text: {
    color: stylesConst.colors.font[0],
  },
  icon: {
    marginRight: 5,
  },
});

export default DequeueButton;

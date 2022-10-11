import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {stylesConst} from '../../constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const EnqueueButton: React.FC<{translateX: number}> = ({
  translateX,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={[styles.movableViewContainer, {transform: [{translateX}]}]}>
        <TouchableOpacity style={[styles.buttonContainer]}>
          <FontAwesome5Icon name="walking" color="white" style={styles.icon} />
          <Text style={styles.text}>Enqueue</Text>
        </TouchableOpacity>
        <AntDesignIcon name="arrowdown" color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  movableViewContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
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

export default EnqueueButton;

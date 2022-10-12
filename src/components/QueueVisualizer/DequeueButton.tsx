import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {stylesConst} from '../../constants';
import {actionCreators} from '../../redux';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

const DequeueButton: React.FC<{translateX: number}> = ({
  translateX,
}): JSX.Element => {
  const {dequeueFromQueue} = bindActionCreators(actionCreators, useDispatch());
  return (
    <View style={styles.container}>
      <View style={[styles.movableViewContainer, {transform: [{translateX}]}]}>
        <AntDesignIcon
          name="arrowup"
          color="black"
          size={18}
          style={styles.arrowIcon}
        />
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={dequeueFromQueue}>
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
  arrowIcon: {
    marginTop: 3,
    marginBottom: 3,
  },
});

export default DequeueButton;

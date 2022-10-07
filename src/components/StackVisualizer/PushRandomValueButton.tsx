import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {screenConst, stylesConst} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../redux';

const PushRandomValueButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {pushRandomItemIntoStack} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={pushRandomItemIntoStack}>
          <Ionicons
            name="push"
            color="white"
            size={20}
            style={styles.pushIcon}
          />
          <Text style={styles.text}>Push random value</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 7,
  },
  pushIcon: {
    transform: [{rotate: '180deg'}],
    marginRight: 5,
  },
  text: {
    color: stylesConst.colors.font[0],
  },
});

export default PushRandomValueButton;

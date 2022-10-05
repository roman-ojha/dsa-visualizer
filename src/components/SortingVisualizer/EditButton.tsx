import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomIcons from '../../components/CustomIcons/CustomIcons';
import {stylesConst} from '../../constants';
import {actionCreators, AppState} from '../../redux';

const EditButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {status} = useSelector((state: AppState) => state.sortingVisualizer);

  const {menuChangeVisibility} = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (status === 'init||finished') {
            menuChangeVisibility(true);
          }
        }}>
        <CustomIcons
          name="arrow-circle"
          color={
            status === 'started&&sorting'
              ? stylesConst.colors.button.after
              : stylesConst.colors.button.before
          }
          size={25}
          style={styles.icon}
        />
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    transform: [{rotate: '90deg'}],
  },
  text: {
    fontSize: 20,
    color: 'black',
    transform: [{rotate: '-90deg'}],
  },
});

export default EditButton;

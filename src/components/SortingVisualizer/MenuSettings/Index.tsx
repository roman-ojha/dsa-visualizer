import React from 'react';
import {StyleSheet, View} from 'react-native';
import Menu from '../../Menu';
import {screenConst} from '../../../constants';
import SpeedRange from './SpeedRange';
import AlgorithmPicker from './AlgorithmPicker';
import ArraySizePicker from './ArraySizePicker';

const MenuSettings = (): JSX.Element => {
  const containerSize = 300;
  return (
    <>
      <Menu size={containerSize}>
        <View style={[{width: containerSize - 40}, styles.container]}>
          <AlgorithmPicker />
          <SpeedRange />
          <ArraySizePicker />
        </View>
      </Menu>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: screenConst.screenWidth - 25,
  },
  rangeSliderContainer: {
    height: screenConst.screenWidth - 200,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default MenuSettings;

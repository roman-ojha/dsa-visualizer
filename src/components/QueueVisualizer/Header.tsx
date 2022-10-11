import React from 'react';
import {StyleSheet, View} from 'react-native';
import {screenConst} from '../../constants';
import VisualizerAppIcon from '../VisualizerAppIcon';

const Header: React.FC<{width: number}> = ({width}): JSX.Element => {
  return (
    <View style={[styles.container, {width}]}>
      <VisualizerAppIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenConst.screenWidth,
    paddingTop: 5,
  },
});

export default Header;

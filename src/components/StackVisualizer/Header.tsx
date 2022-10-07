import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';
import VisualizerAppIcon from '../VisualizerAppIcon';

const Header = (): JSX.Element => {
  return (
    <>
      <View style={styles.header}>
        <VisualizerAppIcon />
        <Text style={styles.title}>Stack</Text>
        <View />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenConst.screenWidth,
  },
  title: {
    marginRight: 25,
    fontSize: 30,
  },
});

export default Header;

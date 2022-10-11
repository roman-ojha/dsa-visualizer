import React from 'react';
import {StyleSheet, View} from 'react-native';
import VisualizerAppIcon from '../VisualizerAppIcon';

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <VisualizerAppIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Header;

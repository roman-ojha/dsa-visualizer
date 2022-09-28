import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {appConst} from '../constants';
import {mixins} from '../styles';

const VisualizerAppIcon = (): JSX.Element => {
  return <Image source={appConst.appIconRounded} style={styles.appIcon} />;
};

const styles = StyleSheet.create({
  appIcon: {
    ...mixins.visualizerPageAppIcon,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default VisualizerAppIcon;

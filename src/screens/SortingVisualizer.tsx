import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, View, Image} from 'react-native';
import constants from '../constants';
import {mixins} from '../styles';
import SortingField from '../components/SortingVisualizer/SortingField';

const SortingVisualizer = (): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        {/* <Image source={constants.app.appIconRounded} /> */}
        <SortingField />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SortingVisualizer;

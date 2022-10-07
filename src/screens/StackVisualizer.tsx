import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Header from '../components/StackVisualizer/Header';
import Info from '../components/StackVisualizer/Info';

const StackVisualizer = (): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <Header />
        <Info />
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
  text: {fontSize: 30, color: 'black'},
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenConst.screenWidth,
  },
  title: {
    marginRight: 25,
    fontSize: 25,
  },
});

export default StackVisualizer;

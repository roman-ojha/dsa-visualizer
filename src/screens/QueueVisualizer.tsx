import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text, StatusBar, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Orientation from 'react-native-orientation-locker';
import VisualizerAppIcon from '../components/VisualizerAppIcon';
import Header from '../components/QueueVisualizer/Header';
import VisualizerField from '../components/QueueVisualizer/VisualizerField';
import InputValue from '../components/QueueVisualizer/InputValue';
import EditButton from '../components/QueueVisualizer/EditButton';

const QueueVisualizer = (): JSX.Element => {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <Header />
        <View style={styles.middleContainer}>
          <Text>Queue</Text>
          <VisualizerField />
          <InputValue />
        </View>
        <EditButton />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenHeight,
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  middleContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'yellow',
    width: screenConst.screenHeight - 200,
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
});

export default QueueVisualizer;

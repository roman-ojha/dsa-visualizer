import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text, StatusBar, View} from 'react-native';
import constants, {screenConst} from '../constants';
import Orientation from 'react-native-orientation-locker';
import Header from '../components/QueueVisualizer/Header';
import VisualizerField from '../components/QueueVisualizer/VisualizerField';
import InputValue from '../components/QueueVisualizer/InputValue';
import EditButton from '../components/QueueVisualizer/EditButton';
import Info from '../components/QueueVisualizer/Info';
import Status from '../components/QueueVisualizer/Status';
import Title from '../components/QueueVisualizer/Title';

const QueueVisualizer = (): JSX.Element => {
  const headerWidth = 55;
  const editButtonWidth = 80;
  const middleContainerWidth = screenConst.screenHeight - 55 - 80;

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
        <Header width={headerWidth} />
        <View style={[styles.middleContainer, {width: middleContainerWidth}]}>
          <View style={styles.infoContainer}>
            <Title />
            <Info />
            <Status />
          </View>
          <VisualizerField />
          <InputValue />
        </View>
        <EditButton width={editButtonWidth} />
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
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default QueueVisualizer;

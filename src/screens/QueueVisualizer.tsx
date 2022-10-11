import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text, StatusBar, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Orientation from 'react-native-orientation-locker';
import VisualizerAppIcon from '../components/VisualizerAppIcon';

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
        <View>
          <View>
            <VisualizerAppIcon />
          </View>
          <View>
            <Text>Queue</Text>
            <View>{/* Queue Visualizer Field */}</View>
            <View>{/* Input Value Field */}</View>
          </View>
          <View>{/* Edit button */}</View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenHeight,
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 30, color: 'black'},
});

export default QueueVisualizer;

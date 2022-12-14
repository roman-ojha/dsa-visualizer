import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Header from '../components/StackVisualizer/Header';
import Info from '../components/StackVisualizer/Info';
import EditFooter from '../components/StackVisualizer/EditFooter';
import InputValue from '../components/StackVisualizer/InputValue';
import PushRandomValueButton from '../components/StackVisualizer/PushRandomValueButton';
import StackPushButton from '../components/StackVisualizer/StackPushButton';
import StackPopButton from '../components/StackVisualizer/StackPopButton';
import StackField from '../components/StackVisualizer/StackField';
import Status from '../components/StackVisualizer/Status';

const StackVisualizer = (): JSX.Element => {
  const heightOfMiddleFieldContainer = screenConst.screenHeight - 250;
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <View>
          <Header />
          <Info />
          <Status />
        </View>
        <View style={[styles.main, {height: heightOfMiddleFieldContainer}]}>
          <PushRandomValueButton />
          <View style={styles.middleFieldButtonContainer}>
            <View
              style={[
                styles.stackPopButtonContainer,
                {maxHeight: heightOfMiddleFieldContainer - 50},
              ]}>
              <StackPopButton />
            </View>
            <StackField />
            <View
              style={[
                styles.stackPushButtonContainer,
                {maxHeight: heightOfMiddleFieldContainer - 50},
              ]}>
              <StackPushButton />
            </View>
          </View>
          <InputValue />
          <EditFooter />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    width: screenConst.screenWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  middleFieldButtonContainer: {
    width: screenConst.screenWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  stackPushButtonContainer: {
    width: 75,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  stackPopButtonContainer: {
    width: 75,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default StackVisualizer;

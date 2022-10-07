import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Header from '../components/StackVisualizer/Header';
import Info from '../components/StackVisualizer/Info';
import EditFooter from '../components/StackVisualizer/EditFooter';
import {TextInput} from 'react-native-gesture-handler';
import InputValue from '../components/StackVisualizer/InputValue';
import PushRandomValueButton from '../components/StackVisualizer/PushRandomValueButton';
import StackPushButton from '../components/StackVisualizer/StackPushButton';
import StackPopButton from '../components/StackVisualizer/StackPopButton';
import StackField from '../components/StackVisualizer/StackField';

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
        </View>
        <View
          style={[
            styles.middleFieldContainer,
            {height: heightOfMiddleFieldContainer},
          ]}>
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
        </View>
        <InputValue />
        <EditFooter />
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
  middleFieldContainer: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'green',
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
    alignItems: 'center',
    height: 300,
  },
  stackPushButtonContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
  },
  stackPopButtonContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    width: 100,
  },
});

export default StackVisualizer;

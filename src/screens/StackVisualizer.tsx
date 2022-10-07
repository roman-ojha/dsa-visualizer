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

const StackVisualizer = (): JSX.Element => {
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
        <View style={styles.middleFieldContainer}>
          <PushRandomValueButton />
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
    borderWidth: 1,
    borderColor: 'green',
    width: screenConst.screenWidth,
    height: screenConst.screenHeight - 250,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default StackVisualizer;

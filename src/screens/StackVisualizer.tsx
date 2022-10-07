import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import Header from '../components/StackVisualizer/Header';
import Info from '../components/StackVisualizer/Info';
import EditFooter from '../components/StackVisualizer/EditFooter';

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
});

export default StackVisualizer;

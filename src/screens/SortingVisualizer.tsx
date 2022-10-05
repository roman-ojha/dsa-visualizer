import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import constants, {screenConst, stylesConst} from '../constants';
import {mixins} from '../styles';
import SortingField from '../components/SortingVisualizer/SortingField';
import Orientation from 'react-native-orientation-locker';
import VisualizerAppIcon from '../components/VisualizerAppIcon';
import Title from '../components/SortingVisualizer/Title';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../redux';
import {useDispatch} from 'react-redux';
import SortButton from '../components/SortingVisualizer/SortButton';
import MenuSettings from '../components/SortingVisualizer/MenuSettings/Index';
import EditButton from '../components/SortingVisualizer/EditButton';

const SortingVisualizer = (): JSX.Element => {
  const dispatch = useDispatch();
  const {generateRandomSortingArray} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <MenuSettings />
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <View style={styles.header}>
          <VisualizerAppIcon />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.voidContainer} />
          <SortingField />
          <View style={styles.titleAndRandomArrayButtonContainer}>
            <TouchableOpacity
              style={styles.generateRandomArrayButton}
              onPress={generateRandomSortingArray}>
              <Text style={styles.generateRandomArrayText}>
                Generate Random Array
              </Text>
            </TouchableOpacity>
            <Title />
            <SortButton />
          </View>
        </View>
        <EditButton />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenConst.screenHeight,
    height: screenConst.screenWidth,
    zIndex: 1,
  },
  header: {
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenConst.screenWidth,
    width: screenConst.screenHeight - 150,
  },
  voidContainer: {
    marginBottom: 20,
    height: 50,
  },
  titleAndRandomArrayButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    marginTop: 20,
    height: 50,
  },
  generateRandomArrayButton: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  generateRandomArrayText: {
    color: stylesConst.colors.font[0],
  },
});

export default SortingVisualizer;

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import SortingField from '../components/SortingVisualizer/SortingField';
import CustomIcons from '../components/CustomIcons/CustomIcons';

const SortingVisualizer = (): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <View style={styles.header}>
          <Image source={constants.app.appIconRounded} style={styles.appIcon} />
        </View>
        <SortingField />
        <TouchableOpacity style={styles.editContainer}>
          <CustomIcons
            name="arrow-circle"
            color="black"
            size={25}
            style={styles.editIcon}
          />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
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
  header: {
    width: screenConst.screenWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appIcon: {
    ...mixins.visualizerPageAppIcon,
    marginTop: 10,
    marginRight: 10,
  },
  editContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    color: 'black',
    transform: [{rotate: '180deg'}],
  },
  editText: {
    fontSize: 20,
    color: 'black',
  },
});

export default SortingVisualizer;

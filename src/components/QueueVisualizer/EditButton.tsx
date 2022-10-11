import React from 'react';
import {StyleSheet, View} from 'react-native';
import {screenConst} from '../../constants';

const EditButton: React.FC<{width: number}> = ({width}): JSX.Element => {
  return <View style={[styles.container, {width}]}>{/* Edit button */}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'yellow',
    height: screenConst.screenWidth,
  },
});

export default EditButton;

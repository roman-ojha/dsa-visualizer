import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {stylesConst} from '../../constants';
import {AppState} from '../../redux';
import {useSelector} from 'react-redux';

const Title = (): JSX.Element => {
  const {title} = useSelector((state: AppState) => state.sortingVisualizer);
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: stylesConst.colors.font[80],
  },
});

export default Title;

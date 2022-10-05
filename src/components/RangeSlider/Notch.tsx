import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Notch: React.FC<{speed: number}> = ({speed}): JSX.Element => {
  return (
    <>
      <Text style={styles.text}>{speed}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default Notch;

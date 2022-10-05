import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Notch: React.FC<{payload: number}> = ({payload}): JSX.Element => {
  return (
    <>
      <Text style={styles.text}>{payload}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default Notch;

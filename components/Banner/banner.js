import {StyleSheet, View} from 'react-native';

import React from 'react';

const Banner = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default Banner;

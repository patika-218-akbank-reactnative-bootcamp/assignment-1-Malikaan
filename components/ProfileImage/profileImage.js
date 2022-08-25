import {Image, StyleSheet, View} from 'react-native';

import React from 'react';

const ProfileImage = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    position: 'absolute',
    top: -50,
    left: 32,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ProfileImage;

import {StyleSheet, Text, View} from 'react-native';

import ProfileImage from '../ProfileImage/profileImage';
import React from 'react';

const ProfileBio = ({imageUrl, title, username, description}) => {
  return (
    <View style={styles.container}>
      <ProfileImage imageUrl={imageUrl} />
      <Text style={styles.titleStyles}>{title}</Text>
      <Text style={styles.usernameStyles}>{username}</Text>
      <Text style={styles.descriptionStyles}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'lightgray',
    padding: 16,
    paddingTop: 66,
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: '600',
  },
  usernameStyles: {
    marginBottom: 16,
    fontSize: 16,
    opacity: 0.5,
    color: 'black',
  },
  descriptionStyles: {},
});

export default ProfileBio;

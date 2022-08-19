import {Alert, Text, TouchableOpacity} from 'react-native';

import React from 'react';

const Tab = ({title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert('You pressed ' + title);
      }}
      style={{
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        margin: 4,
      }}>
      <Text
        style={{
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

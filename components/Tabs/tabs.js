import React from 'react';
import {View} from 'react-native';

const Tabs = ({children}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
      }}>
      {children}
    </View>
  );
};

export default Tabs;

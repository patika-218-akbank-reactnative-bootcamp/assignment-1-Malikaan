/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { ScrollView } from 'react-native';

import Banner from './components/Banner/banner';
import ProfileBio from './components/ProfileBio/profileBio';
import React from 'react';
import Tweets from './components/Tweets/tweets';
import image from './assets/images/kaan_photo.jpeg';

const App = () => {
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
      }}
      contentInsetAdjustmentBehavior="automatic">
      <Banner />
      <ProfileBio
        imageUrl={image}
        title="Kaan Öncül"
        username="@malikaan"
        description="Aspiring Developer. Loving Cat Father. Philanthropist"
      />
      <Tweets imageUrl={image} />
    </ScrollView>
  );
};

export default App;

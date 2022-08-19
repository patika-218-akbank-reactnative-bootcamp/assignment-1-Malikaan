import {
  View,
} from 'react-native';

import React from 'react';
import Tab from '../Tabs/Tab/tab';
import Tabs from '../Tabs/tabs';
import Tweet from './Tweet/tweet';

const Tweets = ({imageUrl}) => {
  const tweetList = [
    {
      id: 1,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :) ',
    },
    {
      id: 2,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :)',
    },
    {
      id: 3,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :)',
    },
    {
      id: 4,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :) 3',
    },
    {
      id: 5,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :) 3',
    },
    {
      id: 6,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :) 3',
    },
    {
      id: 7,
      user: {
        firstName: 'Kaan',
        lastName: 'Öncül',
        username: '@malikaan',
      },
      tweetDate: '1 hour ago',
      tweetText: 'Kodluyoruz React Native Bootcamp :)',
    },
  ];

  return (
    <View>
      <Tabs>
        <Tab title="Tweet" />
        <Tab title="Replys" />
        <Tab title="Likes" />
      </Tabs>

      {tweetList.map(singleTweet => {
        return (
          <Tweet
            key={singleTweet.id}
            imageUrl={imageUrl}
            user={{
              firstName: singleTweet.user.firstName,
              lastName: singleTweet.user.lastName,
              username: singleTweet.user.username,
            }}
            tweetDate={singleTweet.tweetDate}
            tweetText={singleTweet.tweetText}
          />
        );
      })}
    </View>
  );
};

export default Tweets;

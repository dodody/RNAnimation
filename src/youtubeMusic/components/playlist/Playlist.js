import React from 'react';
import {View, Image} from 'react-native';
import PlaylistFull from './PlaylistFull';
import PlaylistMini from './PlaylistMini';

export default function Playlist() {
  return (
    <View
      style={{
        backgroundColor: '#222',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
      }}
    >
      <Image
        source={{uri: 'https://picsum.photos/50'}}
        style={{width: 50, height: 50}}
      />
      {/* <PlaylistFull /> */}
      <PlaylistMini />
    </View>
  );
}

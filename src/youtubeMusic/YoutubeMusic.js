import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import Bottom from './components/bottom/Bottom';

import CategoryHeader from './components/header/CategoryHeader';
import HeaderBackground from './components/header/HeaderBackground';
import LogoHeader from './components/header/LogoHeader';
import MusicListSmall from './components/musiclist/MusicListSmall';
import MusicListMedium from './components/musiclist/MusicListMedium';
import MusicListLarge from './components/musiclist/MusicListLarge';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground selectedCategory={selectedCategory} />
      <LogoHeader />
      <CategoryHeader
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ScrollView>
        <View style={{marginBottom: 100}}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
}

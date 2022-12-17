import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BOTTOM_HEIGHT} from '../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default function Bottom() {
  return (
    <View
      style={{
        backgroundColor: '#222',
        paddingBottom: getBottomSpace(),
      }}
    >
      <View style={{height: BOTTOM_HEIGHT}}>
        <View style={{flexDirection: 'row'}}>
          <BottomItem title="홈" name="home-filled" />
          <BottomItem title="둘러보기" name="explore" />
          <BottomItem title="보관함" name="library-music" />
        </View>
      </View>
    </View>
  );
}

function BottomItem({name, title}) {
  return (
    <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 4}}>
        <Icon name={name} color="white" size={20} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
}

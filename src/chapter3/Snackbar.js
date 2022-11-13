import React, {useRef, useEffect} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Snackbar() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Y축으로 움직여서 스낵바가 올라왔다, 내려왔다 보이게 */}
      <Animated.View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <View
          style={{
            backgroundColor: '#222',
            flexDirection: 'row',
            paddingVertical: 14,
            paddingHorizontal: 20,
            margin: 12,
            borderRadius: 5,
            alignItems: 'center',
          }}
        >
          <Icon name="block" size={25} color="white" />
          <Text style={{color: 'white', marginLeft: 10, fontSize: 15}}>
            잠깐! 오류가 발생했습니다.
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
    키보드 소리가 어떻게 들어가는지 확인해보겠습니다.
  );
}

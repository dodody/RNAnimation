import React, {useRef} from 'react';
import {View, Text, Dimensions, PanResponder, Animated} from 'react-native';
const card = [
  {color: '#aaa'},
  {color: '#bbb'},
  {color: '#ccc'},
  {color: '#ddd'},
  {color: '#eee'},
  {color: '#f2f2f2'},
];

const {width, height} = Dimensions.get('window');
export default function MobilePay() {
  const cardRef = useRef('fold'); // fold, unfold
  const yAnim = useRef(new Animated.Value(0)).current;
  const rotateZAnim = useRef(new Animated.Value(0)).current;

  const panResponer = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const {dy, dx} = gestureState;
        // dy, dx 뭐가 더 크게 변했을까
        const XSlider = Math.abs(dy) < Math.abs(dx);
        const YSlider = Math.abs(dx) < Math.abs(dy);

        if (YSlider) {
          if (5 < dy && dy < 100 && cardRef.current === 'fold') {
            yAnim.setValue(dy);
          }

          if (5 < dy && dy < 100 && cardRef.current === 'unfold') {
            rotateZAnim.setValue(dy);
          }

          if (-75 < dy && dy < 5 && cardRef.current === 'unfold') {
            yAnim.setValue(65 + dy);
          }
        }
      },
      onPanResponderEnd: (evt, gestureState) => {
        const {dy, dx} = gestureState;
        const XSlider = Math.abs(dy) < Math.abs(dx);
        const YSlider = Math.abs(dx) < Math.abs(dy);

        if (YSlider) {
          if (5 < dy) {
            Animated.spring(yAnim, {
              toValue: 65,
              duration: 300,
              useNativeDriver: false,
            }).start();
            cardRef.current = 'unfold';
          }

          if (5 < dy && cardRef.current === 'unfold') {
            Animated.spring(rotateZAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }).start();
          }

          if (dy < -5) {
            Animated.spring(yAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }).start();
            cardRef.current = 'fold';
          }
        }
      },
    }),
  ).current;

  return (
    <View
      {...panResponer.panHandlers}
      style={{
        flex: 1,
        borderWidth: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'relative',
          width: width * 0.7,
          height: width * 0.7 * 0.58 + (card.length - 1) * 20,
        }}
      >
        {card.map((value, index) => {
          const multiplyValue = useRef(new Animated.Value(index - 3)).current;
          const translateY = Animated.multiply(yAnim, multiplyValue);
          return (
            <Animated.View
              key={index}
              style={{
                transform: [
                  {translateY: translateY},
                  {
                    rotateZ: rotateZAnim.interpolate({
                      inputRange: [0, 20],
                      outputRange: ['0deg', '2deg'],
                    }),
                  },
                ],
                position: 'absolute',
                marginTop: index * 20,
                backgroundColor: value.color,
                borderRadius: 4,
                width: width * 0.7,
                height: width * 0.7 * 0.58,
                shadowOffset: {
                  width: -3,
                  height: -3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

import {useRef} from 'react';
import {Animated} from 'react-native';

export default function useYoutubeMusic() {
  const scrollStartRef = useRef();
  // header
  const showHeaderRef = useRef(true);
  const headerAnim = useRef(new Animated.Value(0)).current;
  const headerBgAnim = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = e => {
    const y = e.nativeEvent.contentOffset.y;
    scrollStartRef.current = y;
  };

  const onScroll = e => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    // 위로 올라가는 헤더
    if (0 < dy && dy < 40 && showHeaderRef.current) {
      headerAnim.setValue(dy);
    }
    // 아래로 내려가는 헤더
    if (-40 < dy && dy < 0 && !showHeaderRef.current) {
      headerAnim.setValue(40 + dy);
    }

    headerBgAnim.setValue(y);
  };

  const onScrollEndDrag = e => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    // 위로 올라가는 헤더
    if (0 < dy && showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 40,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = false;
    }
    // 아래로 내려가는 헤더
    if (dy < 0 && !showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = true;
    }
  };

  return {
    onScrollEndDrag,
    onScrollBeginDrag,
    onScroll,
    headerAnim,
    headerBgAnim,
  };
}

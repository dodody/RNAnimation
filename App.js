import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import AnimatedComponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedSpring from './src/chapter2/AnimatedSpring';
import AnimatedDecay from './src/chapter2/AnimatedDecay';
import AnimatedComposing from './src/chapter2/AnimatedComposing';
import AnimatedOtherMethod from './src/chapter2/AnimatedOtherMethod';
import AnimatedProperty from './src/chapter2/AnimatedProperty';

import Snackbar from './src/chapter3/Snackbar';
import DrawerMenu from './src/chapter3/DrawerMenu';

const App = () => {
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //   }}
    // >
    <DrawerMenu />
    // </SafeAreaView>
  );
};

export default App;

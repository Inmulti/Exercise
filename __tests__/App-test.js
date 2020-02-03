/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../src/screens/mainScreen/index';
import SecondScreen from '../src/screens/secondScreen';

import renderer from 'react-test-renderer';

it('Main screen renders correctly', () => {
  renderer.create(<MainScreen />);
});

it('Second screen renders correctly', () => {
  renderer.create(<SecondScreen />);
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../src/screens/mainScreen/index';
import SecondScreen from '../src/screens/secondScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Main screen renders correctly', () => {
  renderer.create(<MainScreen />);
});

it('Second screen renders correctly', () => {
  renderer.create(<SecondScreen />);
});

it('Main screen state change is correct', () => {
  let mainData = renderer.create(<MainScreen />).getInstance();

  mainData.change(2);

  expect(mainData.state.data).toEqual(20);
});

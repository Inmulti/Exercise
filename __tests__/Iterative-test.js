/**
 * @format
 */

import 'react-native';
import React from 'react';
import SecondScreen from '../src/screens/secondScreen';
import data from '../src/data/data';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Iterative algorithm works correct', () => {
  let allData = renderer.create(<SecondScreen />).getInstance();

  allData.renderTree(data);

  expect(allData.state.viewTreeArray.length).toEqual(16);
});

it('addToData in Iterative algorithm is working', () => {
  let allData = renderer.create(<SecondScreen />).getInstance();

  // data length is 16
  allData.renderTree(data);
  // adding more nodes
  allData.addToTree('Tree Home Value');
  allData.addToTree('Tree Home NewValue');
  allData.addToTree('Tree Home Value Test');
  // this should be ignored because "Value" in this path already exist
  allData.addToTree('Tree Home Value');
  // this should be ignored because Input is empty
  allData.addToTree('');
  // this should be ignored because input is undefined
  allData.addToTree(undefined);

  expect(allData.state.viewTreeArray.length).toEqual(19);
});

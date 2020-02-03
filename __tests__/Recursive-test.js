/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../src/screens/mainScreen/index';
import data from '../src/data/data';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Recursive algorithm correct', () => {
  let allData = renderer.create(<MainScreen />).getInstance();

  allData.renderTree(data);

  expect(allData.state.viewTreeArray.length).toEqual(16);
});

it('addToData in Recursive algorithm is working', () => {
  let allData = renderer.create(<MainScreen />).getInstance();

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

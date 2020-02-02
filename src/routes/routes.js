import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';

const MainScreenNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
});

const SecondScreenNavigator = createStackNavigator({
  SecondScreen: {
    screen: SecondScreen,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    MAINSCREEN: {
      screen: MainScreenNavigator,
      navigationOptions: () => ({
        tabBarLabel: 'Main',
      }),
    },
    SECONDSCREEN: {
      screen: SecondScreenNavigator,
      navigationOptions: () => ({
        tabBarLabel: 'Second',
      }),
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: true,
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'black',
        position: 'relative',
        justifyContent: 'center',
        textAlignVertical: 'center',
        paddingBottom: 8,
        height: 42,
      },
      labelStyle: {
        fontSize: 14,
      },
    },
  },
  {
    initialRouteName: 'SECONDSCREEN',
  },
);

const Navigator = createStackNavigator({
  Main: {
    screen: TabNavigator,
    navigationOptions: {
      header: () => null,
    },
  },
});

export default createAppContainer(Navigator);

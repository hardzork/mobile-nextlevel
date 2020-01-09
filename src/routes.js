// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createStackNavigator(
          {
            Dashboard: {
              screen: Dashboard,
              navigationOptions: ({ navigation }) => ({
                // headerShown: false,
                // title: '',
              }),
            },
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

import React from 'react';
import SignupLoginScreen from './screens/SignupLoginScreen'

import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation-tabs'

import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen:SignupLoginScreen},
  bottomTab:{screen:AppTabNavigator},
})

const AppContainer = createAppContainer(switchNavigator)


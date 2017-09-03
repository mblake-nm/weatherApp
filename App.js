import React from 'react';
import { StyleSheet, Text, View, navigatorIOS } from 'react-native';
import  Navigation  from './navigation/navigation'
import { StackNavigator } from 'react-navigation'

export default class App extends React.Component {

  render() {

    return (
      	<Navigation />
    );
  }
}

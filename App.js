/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PresentationalComponent from './PresentationalComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    myState: 'hello State'
  }
  updateState = () => {
    this.setState({ myState: 'The State is updated' })
  }
  render() {
    return (
      <View>
        <Text>React Native</Text>
        <PresentationalComponent myState = { this.state.myState } updateState = { this.updateState } />
      </View>
    );
  }
}


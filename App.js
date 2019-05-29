/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // row theo kieu dong con column theo kieu cot
  },
  redbox: {
    flex :1,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    flex :1,
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    flex :1,
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
});

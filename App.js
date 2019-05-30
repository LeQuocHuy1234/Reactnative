/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import flatListData from './data/flatListData';
import { Dimensions } from "react-native";

class FlatListItem extends Component {

  render() {
    let width = Dimensions.get('window').width;
    return (
        <View style = {{
          flex: 1,
          width: width,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.props.index % 2 == 0 ? 'red' :'green',
          borderWidth: 1,
        }}>
          <Text>{ this.props.item.name }</Text>
        </View>
    )
  }
}
export default class App extends Component {
  render() {
    console.log('hoang');
    return (
        <View style={styles.container}>
          <FlatList
              data = { flatListData }
              renderItem = {({item, index}) =>
                <FlatListItem item = { item } />
              }
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
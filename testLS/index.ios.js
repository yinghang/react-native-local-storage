/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var ls = require('react-native-local-storage');

class testLS extends Component {
  render() {
    ls.set('test', 'blah');
    ls.get('test').then((data) => {console.log("get: ", data)});
    ls.update('test', 'bleh');
    ls.get('test').then((data) => {console.log("get updated: ", data)});
    ls.remove('test');
    ls.get('test').then((data) => {console.log("get removed: ", data)});
    console.log("Multi key test");
    ls.set('Cole', 'Ellison');
    ls.set('YH', 'Eng');
    ls.set('Eagle', 'Wu');
    ls.get(['Cole', 'YH', 'Eagle']).then((data) => {console.log("multi get data: ", data)})
      .then(()=> {
          console.log("Multi remove test");
          ls.remove(['Cole', 'YH', 'Eagle']).then( () => {
              ls.get(['Cole', 'YH', 'Eagle']).then((data) => {
                console.log("multi get data: ", data)
              });
            }
          )
        }
      )


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Local Storage Test App
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+D or shake for dev menu, {'\n'} and check console for test results.
        </Text>
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

AppRegistry.registerComponent('testLS', () => testLS);

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
  lsSet(key, val){
    this.setState({[key]: val});
  }

  componentDidMount(){
    console.log("react-native-local-storage test starts");
    ls.save('Abhi', 'Ramesh')
      .then(()=>{
        ls.getSet('Abhi', 'abhisName', this.lsSet.bind(this))
          .then(()=>{
            console.log(this.state);
          })
      })
  }

  render() {
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

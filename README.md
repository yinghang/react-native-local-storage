# react-native-local-storage
Simple AsyncStorage wrapper for React Native to solve code mess

##How to install
1. `npm i react-native-local-storage --save`

##How to use
```Javascript
var ls = require('react-native-local-storage');

ls.set('test', 'blah');
ls.get('test').then((data) => {console.log("get: ", data)});
ls.update('test', 'bleh');
ls.get('test').then((data) => {console.log("get updated: ", data)});
ls.remove('test');
ls.get('test').then((data) => {console.log("get removed: ", data)});
```
##Features to be implemented
- [ ] Expand functionalities
- [ ] Implement setState feature
- [ ] Implement fetch feature
# react-native-local-storage
Simple AsyncStorage wrapper for React Native to solve code mess

##How to install
`npm i react-native-local-storage --save`

##Why did I build this?
While working on a React Native project, I discovered that AsyncStorage and its async nature was a pain in the bottom. It was also very troublesome to copy the same chunk of code everywhere when we needed to access the storage. Thus, I decided to create a package to solve some of my problems and hopefully someone else's too!

##How to use
```Javascript
var ls = require('react-native-local-storage');

ls.save('name', 'Kobe Bryant')
  .then(() => {
    ls.get('name').then((data) => {console.log("get: ", data)});
    // output should be get: Kobe Bryant
  })
```
##Features to be implemented
- [ ] Expand functionalities
- [x] Implement setState feature
- [ ] Implement fetch feature
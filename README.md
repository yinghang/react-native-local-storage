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
    // output should be "get: Kobe Bryant"
  })
```
##Auto setState feature
Sometimes, it's very annoying to setState separately after grabbing the data from AsyncStorage. Thus, I wrote a quick function that helps you setState automatically after the data is obtained from AS and there's also no need to parse the array of arrays given back by AsyncStorage.
```Javascript
var ls = require('react-native-local-storage');

lsSet(key, val){
  this.setState({[key]: val});
}

var n = ls.save('name', 'Kobe Bryant');
var a = ls.save('age', 37);
var pn = ls.save('player no.', 24);
Promise.all([n, a, pn]).then(()=>{
  ls.getSet(['name', 'age', 'player no.'], this.lsSet.bind(this))
    .then(()=>{
      console.log(this.state);
      // output should be "{name: "Kobe Bryant", age: 37, player no.: 24}"
    })
});
```

##Adding an array of objects
```Javascript
console.log("test for saving an array of objects");

var test = ls.save(['testArray', 'testingArray'], [
{
  blah1: 1,
  blah2: 2,
  blah3: 'numberrrr 3'
},
{
  blah4: 4,
  blah5: 5,
  blah6: 'numberrrr 6'
}
]);

Promise.all([test]).then(() => {
  ls.getSet(['testArray', 'testingArray'], this.lsSet.bind(this))
    .then(()=>{
      console.log(this.state);
      // output should be "Object {testArray: Object, testingArray: Object}"
    })
})
```


##Features to be implemented

- [ ] Expand functionalities - neverending process ain't it?
- [x] Implement setState feature
- [x] Implement array feature
- [ ] Implement fetch feature
- [ ] Implement encryption feature
- [ ] Implement cache+expiration feature

##Contributors

- Ying Hang Eng (Me)
- [Cole Ellison](http://github.com/crellison)
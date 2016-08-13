'use strict';

// wrapper for Asyncstorage
// #1 - reduce code mess for AsyncStorage
// #2 - practice creating react native modules

// features to implement
// #1 - expand the functionalities to support multiGet etc
// #2 - help setState?
// #3 - help with fetch?

import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

var localStorage = {
  save(key, value){
    if(!Array.isArray(key)){
      return AsyncStorage.setItem(key, JSON.stringify(value));  
    } else {
      for(var i = 0; i < key.length; i++){
        AsyncStorage.setItem(key[i], JSON.stringify(value[i]));
      }
      return;
    }
    
  },

  getSet(key, ssFunction){
    if(!Array.isArray(key)){
      return AsyncStorage.getItem(key).then(function (value) {
        ssFunction(key, JSON.parse(value));
      });
    } else {
      return AsyncStorage.multiGet(key).then(function (values) {
        for(var i = 0; i < values.length; i++){
          ssFunction(values[i][0],JSON.parse(values[i][1]));
        }
        return;
      });
    }

  },

  get(key) {
    if (!Array.isArray(key)) {
      return AsyncStorage.getItem(key).then(function (value) {
        return JSON.parse(value);
      });
    } else {
      return AsyncStorage.multiGet(key).then(function (values) {
        return values.map(function (value) {
          return JSON.parse(value[1]);
        });
      });
    }
  },

  update(key, value){
    return AsyncStorage.setItem(key, value);
  },

  remove(key){
    if (!Array.isArray(key)){
      return AsyncStorage.removeItem(key);
    } else {
      return AsyncStorage.multiRemove(key);
    }

  }
}

module.exports = localStorage;

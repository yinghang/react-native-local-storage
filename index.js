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
  set(key, value){
    return AsyncStorage.setItem(key, value);
  },

  get(key) {
    if (!Array.isArray(key)) {
      return AsyncStorage.getItem(key).then(function (value) {
        return value;
      });
    } else {
      return AsyncStorage.multiGet(key).then(function (values) {
        return values.map(function (value) {
          return value[1];
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

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
  save(key_s_, value){
    if(!Array.isArray(key_s_)){
      return AsyncStorage.setItem(key_s_, JSON.stringify(value));
    } else {
      let keyValArray = [];
      for (let i = 0; i < key_s_.length; i++) {
        keyValArray.push([key_s_[i], JSON.stringify(value_s_[i]) ]);
      }
      return AsyncStorage.multiSet(keyValArray);
    }
  },

  getSet(key_s_, ssFunction){
    if(!Array.isArray(key_s_)){
      return AsyncStorage.getItem(key_s_).then(function (value) {
        ssFunction(key_s_, JSON.parse(value));
      });
    } else {
      return AsyncStorage.multiGet(key_s_).then(function (values) {
        for(var i = 0; i < values.length; i++){
          ssFunction(values[i][0],JSON.parse(values[i][1]));
        }
        return;
      });
    }

  },

  get(key_s_) {
    if (!Array.isArray(key_s_)) {
      return AsyncStorage.getItem(key_s_).then(function (value) {
        return JSON.parse(value);
      });
    } else {
      return AsyncStorage.multiGet(key_s_).then(function (values) {
        return values.map(function (value) {
          return JSON.parse(value[1]);
        });
      });
    }
  },

  getAllKeys() {
    return AsyncStorage.getAllKeys();
  },

  // update() does not stringify the value. It should probably call this.save().
  update(key_s_, value){
    return AsyncStorage.setItem(key_s_, value);
  },

  merge(key_s_, value_s_){
    if(!Array.isArray(key_s_)){
      return AsyncStorage.mergeItem(key_s_, JSON.stringify(value_s_));
    } else {
      let keyValArray = [];
      for (let i = 0; i < key_s_.length; i++) {
        keyValArray.push([key_s_[i], JSON.stringify(value_s_[i]) ]);
      }
      return AsyncStorage.multiMerge(keyValArray);
    }
  },

  remove(key_s_){
    if (!Array.isArray(key_s_)){
      return AsyncStorage.removeItem(key_s_);
    } else {
      return AsyncStorage.multiRemove(key_s_);
    }
  },

  clear() {
    return AsyncStorage.clear();
  }

}

module.exports = localStorage;

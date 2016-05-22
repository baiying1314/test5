'use strict';

function double_to_one(collection) {

  return buildOneArray(collection)
}

function buildOneArray(collection) {
  var newArray = [];
  
  collection.forEach(function (collectionItem) {
    newArray = newArray.concat(collectionItem);
  });

  return newArray;
}
module.exports = double_to_one;

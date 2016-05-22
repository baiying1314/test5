function double_to_one(collection) {

  return buildOneArray(collection)
}

function buildOneArray(collection) {
  var newArray = [];
  var arrayNumber;

  collection.forEach(function (collectionItem) {
    if (typeof (collectionItem) === "number") {
      arrayNumber = deleteNumberItem(newArray, collectionItem);
    }
    else {
      arrayNumber = deleteArrayItem(newArray, collectionItem);
    }
    if (arrayNumber != null && arrayNumber != []) {
      newArray = newArray.concat(arrayNumber);
    }
  });

  return newArray;
}

function deleteArrayItem(newArray, collectionItems) {
  var arrayNumber = [];

  collectionItems.forEach(function (collectionItem) {
    var number = deleteNumberItem(newArray, collectionItem);
    if (number != null) {
      arrayNumber.push(number);
    }
  });

  return arrayNumber;
}

function deleteNumberItem(newArray, collectionItem) {
  for (var i = 0; i < newArray.length && collectionItem != newArray[i]; i++);
  if (i >= newArray.length) {

    return collectionItem;
  }
  else {

    return null;
  }
}

module.exports = double_to_one;

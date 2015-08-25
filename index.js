'use strict';

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  var pivot = arr[parseInt((left + right) / 2)];
  var i = left;
  var j = right;

  // determines when all of the items in the array range have been processed
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

module.exports = function sort(arr, left, right) {
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;

  if (arr.length > 1) {
    var index = partition(arr, left, right);

    if (left < index - 1) {
        sort(arr, left, index - 1);
    }

    if (index < right) {
        sort(arr, index, right);
    }
  }
  return arr;
};
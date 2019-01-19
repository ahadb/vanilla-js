function binarySearch(arr, elem) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === elem) {
    return middle
  }
  return -1
}

binarySearch([1, 2, 4, 8, 12, 18, 22, 30, 50, 99, 100], 100)
// => 10

binarySearch([1, 2, 4, 8, 12, 18, 22, 30, 50, 99, 100], -1)
// => -1

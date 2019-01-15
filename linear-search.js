// linear-search.js

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
// => 9

linearSearch(["Farah", "Javed", "Chris", "Allie", "Kate", "Ali", "Adrian"], "Fahad")
// => -1

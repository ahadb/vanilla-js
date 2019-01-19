if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(projectedCb) {
    var results = []
    this.forEach(function(item) {
      results.push(projectedCb(item))
    })

    return results
  }
}

[1, 2, 3, 4, 5].myMap(i => i * 2)
// => Array(5) [ 2, 4, 6, 8, 10 ]

function simulateAsync(ms, callback) {
  setTimeout(function() {
    callback()
  }, ms)
}

simulateAsync(1000, function() { console.log(true) })
// => true (...after 1 second)

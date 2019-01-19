(function(window) {
  'use strict'

  // Our main function that contains all the logic
  function myLib(){
    var _myLibObject = {}

    // variables inaccessible to the user of our library, but available in library scope
    var config = {
      counter: 1,
      done: false
    }

    // Custom methods that can access and mutate our private variable
    _myLibObject.incrementCounter = function() {
      config.counter += 1

      return config.counter
    }

    _myLibObject.decrementCounter = function() {
      config.counter -= 1

      return config.counter
    }

    // Another custom function for our library
    _myLibObject.logger = function(logMe) {
      console.log("Logger > Type of variable : " + typeof(logMe))
      console.log("Logger > Is number : " + !isNaN(logMe))
      console.log("Logger > Length : " + (logMe).length)

      return console.log(logMe)
    }

    return _myLibObject
  }

  // Globally accessible library object
  if(typeof(window.myAwesomeLibrary) === 'undefined') {
    window.myAwesomeLibrary = myLib()
  }
})(window)

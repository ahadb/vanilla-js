function extend() {
  var extendedObj = {}

  function merge(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        extendedObj[prop] = obj[prop]
      }
    }
  }

  for (var i = 0; i < arguments.length; i++) {
    merge(arguments[i])
  }

  return extendedObj
}

var originalObj1 = {
  eyes: 'black',
  hair: 'brown',
  gender: 'female',
  age: 36
}

var originalObj2 = {
  eyes: 'green',
  hair: 'blonde',
  gender: 'male'
}

extend(originalObj1, originalObj2)

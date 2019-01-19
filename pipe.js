// imperatively written, we could also use a declarative approach
function pipe(arr) {
  return function(y) {
    let result = y
    for (let i = 0; i < arr.length; i++) {
      let func = arr[i]
      result = func(result)
    }
    return result
  }
}

// lets create some functions to pass to our pipe fn
// they don't have to perfect for demo purposes
function petName(pet) {
  return pet.name
}

function uppercase(str) {
  return str.toUpperCase()
}

function first5Char(str) {
  return str.substring(0,6)
}

function reverse(str) {
  return str.split('').reverse().join('')
}

function compressString(str) {
  var output = ''
  var count = 0
  for (var i = 0; i < str.length; i++) {
    count++
    if (str[i] != str[i+1]) {
      output += str[i] + count
      count = 0
    }
  }
  console.log(output)
}

pipe([petName, uppercase, first5Char, reverse, compressString])({name: 'BooBoo'})
// => "B1O2B1O2"

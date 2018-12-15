# vanilla-js
Learn to embrace vanilla JavaScript without the kruft, churn, bloat and fluff. This repos is work in progress that aims to address people learning the CORE JavaScript language instead of dropping in new libraries and frameworks (...the proverbial shiny new object).

If you're a serious JavaScript developer you need to know the core language, it's quirks and nuances from the ground up. By learning the fundamentals you'll put yourself ahead of the pack and build great confidence and skill - skill that will be the envy of your colleages. If you look behind the hood of any library or frameworks, you'll see vanilla javascript patterns written over and over and over - this should in itself indicate to you that you don't need a library or framework to do much of the stuff you need to do on a daily basis.

Honestly the advantages are limitless so we won't concentrate on listing them. Below you'll find syntactical examples and short descriptions of popular vanilla javascript in the wild that you should definitely acquaint yourself with in no particualr order. Once this repo grows to a substantial level I'll reorganize it into succinct categories.
We'll try to use as much ES5 as possible with some exceptions as we progress with more advanced examples, but generally we'll be ES5. You could refactor for ES6++ which would be good practice.

Go on, build your career, confidence and the respect of other engineers in the industry!

## assert()
The most humble of functions, if you know how to use this function it can take care of 80% of your test cases:

```javascript
function assert(value, descr) {
  const result = value ? 'pass' : 'fail'
  console.log(`${result} — ${descr}`)
}
```
Here are a few examples of how you can use `assert()`:

```javascript
assert(1 === "1", 'the values aren\'t equal; they are of different types')
assert(null == undefined, 'yields true, beware of == comparing values')
assert(typeof { a: 1 } === 'object', 'it is an object literal')
assert("this is a string".split('').reverse().join('') === 'gnirts a si siht', 'successfully reversed a string!')

function foo(x, y, z) {
  assert(x === 10, '10 is the value of a')
  assert(y === 20, '20 is the value of b')
  assert(z === 30, '30, is the value of c')

  assert(arguments[0] === x, 'x is assigned to the first argument')
  assert(arguments[1] === y, 'y is assigned to the second argument')
  assert(arguments[2] === z, 'z is assigned to the third argument')

  assert(arguments.length === 3, 'we\'ve passed in 3 paramaters')
  assert(this === window, 'the this value points to the window object') 
}

foo(10, 20, 30)

function Person() {}
const zoya = new Person()
assert(typeof zoya === 'object', 'zoya is an object')
assert(zoya instanceof Person, 'zoya is an instance of the Person constructor function')
```

## Test if said array holds a specific value`

It's pretty easy to test if a certain value exists in an array, `indexOf` returns -1 if it doesn't which can be confusing at times.

```javascript
function existsInArray(val, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

// works well for primitive values
var myArr = [10, 20, 30, 40, 50, null, undefined]
existsInArray(null, myArr)
// => 5
```
We can simply refactor the `existsinArray` function to return true or false

```javascript
function existsInArray(val, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
  }
  return false
}

var myArr = ['ten', 'twenty', 30, 40.1, 50.2]
existsInArray(50.2, myArr)
// => 4
```

> Alternatively, you can also use `indexOf`:
```javascript
var myArr = ['ten', 'twenty', 30, 40.1, 50.2]
myArr.indexOf(30)
//=> 2
```

## Extend Objects, or Rather Merge Objects
Natively, JavaScript doesn't have a way to merge objects with the exception of `object.assign()`. When merging multiple objects together we can use the function below.
Note the following will return a shallow copy only.

```javascript
function extend() {
  var extendedObj = {}
  
  function merge(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        extendedShallowObj[prop] = obj[prop]
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
// => {eyes: "green", hair: "blonde", gender: "male", age: 36}
```

> Alternatively, you can also use `Object.assign`, or the spread operator:
```javascript
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

// Object.assign
Object.assign({}, originalObj1, originalObj2)
// => {eyes: "green", hair: "blonde", gender: "male", age: 36}

// Using object spread
const extendedObj = {...originalObj1, ...originalObj2}
// => {eyes: "green", hair: "blonde", gender: "male", age: 36}
```

## Dynamically Create a Table from Array on Objects
Loop through some data and dynamically create a table which you'll append to the DOM

```javascript
var data = [
  { id: 1, name: 'Anthony', skill: 'Frontend' },
  { id: 2, name: 'Ibrahim', skill: 'Backend' },
  { id: 3, name: 'Maeesha', skill: 'UX' }
]

var tableStr = ""

for (var i = 0; i < data.length; i++) {
 tableStr += "<tr>"
 tableStr +=   "<td>"+ data[i].id +"</td>"
 tableStr +=   "<td>"+ data[i].name +"</td>"
 tableStr +=   "<td>"+ data[i].skill +"</td>"
 tableStr += "</tr>"
}

document.querySelector('tbody').innerHTML = tableStr
```
...and the html to go along with it
```html
<table border=1>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Skill</th>
    </tr>
   <thead>
   <tbody>
   </tbody>
 </table>
```

> You could also use the help of ES6's map() function
```javascript
var data = [
  { id: 1, name: 'Anthony', skill: 'Frontend' },
  { id: 2, name: 'Ibrahim', skill: 'Backend' },
  { id: 3, name: 'Maeesha', skill: 'UX' }
]

var tableStr = ""

tableStr = data.map(f => `
  <tr>
    <td>${f.id}</td>
    <td>${f.name}</td>
    <td>${f.skill}</td>
  </tr>
`).join('')
```

## Projection (Imperatively Creating a New Array Without Mutation)
Projection is a cool concept to know about and is a mapping of a set (or other mathematical structure) into a subset (or sub-structure), which is equal to its square. In the case below we are omitting the square as we'll
create our own map, filter, reduce functions at a later stage. It's fun however to see how this concept works using simple constructs like our `forEach` function

```javascript
function projection(originalArr) {
  var newArr = []
  
  originalArr.forEach(function(item) {
    newArr.push({
      id: item.id,
      name: item.name + ',' + ' Projected',
      phone: item.phone + ' ext: 21'
    })
  })
  
  return newArr
}

var users = [{
      "id": Math.floor(Math.random() * 10000000),
      "name": "Sarah",
      "phone": "555-555-55555"
    }, {
      "id": Math.floor(Math.random() * 10000000),
      "name": "Hakeem",
      "phone": "555-555-6666"
    }, {
      "id": Math.floor(Math.random() * 10000000),
      "name": "Michelle",
      "phone": "555-555-7777"
    }, {
      "id": Math.floor(Math.random() * 10000000),
      "name": "Catherine",
      "phone": "555-555-8888"
}]

projection(users)
// => Array(4) [ {…}, {…}, {…}, {…} ]
```
The `projection` function does not provide a complete interface for all arrays, rather has a concrete foundation from which we can later build upon.

## map()
Here is an example of our own map method - I would not advise extending the prototype object but for the purpose of this example we will do just that.

```javascript
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(projectedCb) {
    var results = []
    this.forEach(function(item) {
      results.push(projectedCb(item))
    })
    
    return results
  }
}

// [1, 2, 3, 4, 5].myMap(i => i * 2)
// => Array(5) [ 2, 4, 6, 8, 10 ]
```


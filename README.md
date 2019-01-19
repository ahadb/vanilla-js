# vanilla-js
Learn to embrace vanilla JavaScript without the kruft, churn, bloat and fluff. This repo is work in progress that aims to address people learning the CORE JavaScript language instead of dropping in new libraries and frameworks (...the proverbial shiny new object).

If you're a serious JavaScript developer you need to know the core language, it's quirks and nuances from the ground up. By learning the fundamentals you'll put yourself ahead of the pack and build great confidence and skill - skill that will be the envy of your colleages. If you look behind the hood of any library or frameworks, you'll see vanilla javascript patterns written over and over and over - this should in itself indicate to you that you don't need a library or framework to do much of the stuff you need to do on a daily basis.

Honestly the advantages are limitless so we won't concentrate on listing them. Below you'll find syntactical examples and short descriptions of popular vanilla javascript in the wild that you should definitely acquaint yourself with in no particualr order. Once this repo grows to a substantial level I'll reorganize it into succinct categories.
We'll try to use as much ES5 as possible with some exceptions as we progress with more advanced examples, but generally we'll be ES5. You could refactor for ES6++ which would be good practice.

Go on, build your career, confidence and the respect of other engineers in the industry!

## Table of Contents

* [assert()](#assert())
* [Extend Objects, or Rather Merge Objects](#extend-objects-or-rather-merge-objects)
* [Dynamically Create a Table from Array on Objects](#dynamically-create-a-table-from-array-on-objects)
* [Taversing an Array](#traversing-an-array)
* [Projection (Imperatively Creating a New Array Without Mutation)](#projection-imperatively-creating-a-new-array-without-mutation)
* [map()](#map)
* [filter()](#filter)
* [Chaining Functional Functions](#chaining-functional-functions)
* [Flatten a Multi-Dimensional Array](#flatten-a-multi-dimensional-array)
* [GET Request](#get-request)
* [POST Request](#post-request)
* [Callback](#callback)
* [Simulate Async Code](#simulate-async-code)
* [Select Element By ID](#select-an-element-by-id)
* [Select an Element By Class Name](#select-an-element-by-class-name)
* [Select and Match a Static (non-live) Specified Group of Selectors](#select-and-match-a-static-non-live-specified-group-of-selectors)
* [Select Elements By Tag Name](#select-elements-by-tag-name)
* [Create a New DOM Element](#create-a-new-dom-element)
* [Create Nodes and Append Them to New Element](#create-nodes-and-append-them-to-new-element)
* [Append or Prepend to an Element](#append-or-prepend-to-an-element)
* [Match Element Selector](#match-element-selector)
* [Get Parent and Sibling Element Nodes](#get-parent-and-sibling-element-nodes)
* [Get a Query String From a Url](#get-a-query-string-from-a-url)
* [Create an Event Listener](#create-an-event-listener)
* [Spawn a Web Worker](#spawn-a-web-worker)
* [pipe()](#pipe())
* [Linear Search](#linear-search)
* [Binary Search()](#binary-search)
* BONUS [Create JavaScript Library Without Prototype](#create-javascript-library-without-prototype)

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

## Linear Search
JavaScript has search built-in with these common methods: `indexOf`, `includes`, `find`, and `findIndex`. Behind the hood when these native functions run they are simply checking for each value
per iteration in a sequential or linear fashion.
```javascript
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
```
We can simply refactor the `linearSearch` function to return true or false

```javascript
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
  }
  return false
}

var myArr = ['ten', 'twenty', 30, 40.1, 50.2]
linearSearch(50.2, myArr)
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

## Taversing an Array
Printing all the elements of an array imperatively, without a functional style.

```javascript
function traverseArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

var myArr = [10, 20, 30 ,40, 50]
traverseArray(arr)
// => 10, 20, 30, 40, 50
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

## filter()
Almost the same as above with a slightly different implementation, let's encapsulate the data as well. You can create a reusable 
interface yourself at a later stage.

```javascript
function predicate() {
  var results = []
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
    "name": "Catherine",
    "phone": "555-555-7777"
  }, {
    "id": Math.floor(Math.random() * 10000000),
    "name": "Catherine",
    "phone": "555-555-8888"
  }]
  users.forEach(function(user) {
    return user.name === 'Catherine' ? results.push(user) : null
  })
  
  return results
}

predicate()
// => Array [ {…}, {…} ]
```
Here we're attaching our own filter method to the prototype (I wouldn't do this in real life, just for example purposes)
```javascript
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function(predicate) {
    var results = []
    this.forEach(function(item) {
      predicate(item) ? results.push(item) : null
    })
    
    return results
  }
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter(x => x % 2)
// => Array(5) [ 1, 3, 5, 7, 9 ]  ​
```

> With ES6 it's as simple as:
```javascript
var firstFive = [1, 2, 3, 4, 5]

firstFive.filter(f => f <= 2)
// => [1, 2]
// => firstFive
// => Array(5) [ 1, 2, 3, 4, 5 ]
```

## Chaining Functional Functions
Just for a little fun, let's chain our above functions `myMap()` and `myfilter()` together to yield a desired result

```javascript
function myChain() {
  var movies = [{
    "id": Math.floor(Math.random() * 10000000),
    "title": "Crazy Asians",
    "length": 2.15
  }, {
    "id": Math.floor(Math.random() * 10000000),
    "title": "Predator",
    "length": 1.48
  }, {
    "id": Math.floor(Math.random() * 10000000),
    "title": "Teen Wolf",
    "length": 2.00
  }, {
    "id": Math.floor(Math.random() * 10000000),
    "title": "Bad Boys",
    "length": 2.09
  }]

  return newReleases
    .myFilter(movie => movie.length >= 2.00)
    .myMap(video => video.title)
}

myChain()
// => Array(3) [ "Crazy Asians", "Teen Wolf", "Bad Boys" ]
```

## Flatten a Multi-Dimensional Array
Use a plain for loop to flatten a multi-dimensional or 2D array

```javascript
function flattenArray() {
  var myArray = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
  var flattenedArray = []
  
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; ++j) {
      flattenedArray.push(myArray[i][j])
    }
  }
  return flattenedArray
}

flattenArray()
// => Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

## GET Request
Make a simple GET request using the XMLHttpRequest object

```javascript
function getRequest(url, isAsync, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
          callback(xmlHttp.responseText);
    }
  xmlHttp.open("GET", url, isAsync)
  xmlHttp.send(null)
}

getRequest('https://jsonplaceholder.typicode.com/posts/1', function(response) {
  console.log(JSON.parse(response))
})
```

## POST Request
Make a simple POST request using the XMLHttpRequest object

```javascript
function postRequest(url, isAsync, data) {
  var xmlHttp = new XMLHttpRequest()
   
  xmlHttp.open('POST', url, isAsync)
  xmlHttp.setRequestHeader('Content-Type', 'application/json')
  xmlHttp.onload = function() {
    if (xhr.status !== 200) {
      alert('Something went wrong.')
    }
  }
  
  console.log(data)
  console.log(JSON.parse(data))
  xmlHttp.send(data)
}

var jsonData = { title: 'foo', body: 'bar', userId: 1 }
var formattedJsonData = JSON.stringify(jsonData)

postRequest('https://jsonplaceholder.typicode.com/posts', true, formattedJsonData)
```

## Callback
Create a callback function that's passed to another function and invoked in your outer function

```javascript
function greeting(name) {
  alert('Hello ' + name)
}

function processUserInput(callback) {
  var name = prompt('What is your name?')
  callback(name)
}

processUserInput(greeting)
```

> below is the most contrived example of a callback
```javascript
// the most contrived example
function cbExample(cb) {
  cb()
}

cbExample(function() { console.log('Hi')})
```

## Simulate Async Code
It's often useful do simulate async code, we can easily achieve this using `setTimeout`
```javascript
function simulateAsync(ms, callback) {
  setTimeout(function() {
    callback()
  }, ms)
}

simulateAsync(1000, function() { console.log(true) })
// => true (...after 1 second)
```

## Select an Element By Id
Use `getElementById()`, which returns the one element with a particular id

> Get the element with an id of 'home-panel'
```javascript
var el = document.getElementById('home-panel')
el.innerHTML = 'Selected Home Panel and appended some text into it'
```

## Select an Element By Class Name
Use `getElementsByClassName()`, which returns a collection of elements

> Get all elements that have a class of test
```javascript
var testEl = document.getElementsByClassName('test')
```

> Get the first element that has a class of test
```javascript
var firstTestEl = document.getElementsByClassName('test')[0]
```

## Select and Match a Static (non-live) Specified Group of Selectors
Use `querySelectorAll()`

```javascript
var paraMatches = document.querySelectorAll('p')
var multipleMatches = document.querySelectorAll('div.banner, div.notes')
```

## Select Elements By Tag Name
Use `getElementsByTagName() for div, a, span`

```javascript
var el = document.getElementsByTagName('a')

// get the number of selected items
console.log(el.length)

// loop or iterate over elements and output href values
for (var i = 0; i < el.length; i++) {
  console.log(el[i].href)
}
```

## Create a new DOM element
Simply use `createElement` to create new dom elements

```javascript
var el = document.createElement('div')

// fill the new element with HTML content
el.innerHTML('<span>Hello World</span>')
```

## Create Nodes and Append Them to New Element
This requires more code than the above `createElement`

```javascript
var el = document.createElement('div')
var textNode = document.createTextNode('Hello World')
el.appendChild(textNode)

// no insert it into the DOM tree
document.body.appendChild(el)
```

## Append or Prepend to an Element
Insert a new element to the end or beginning of another element's content

```javascript
var el = document.querySelector('div')
		
// append to the element's content
el.innerHTML += '<p>Hello World!</p>'
	
// prepend to the element's content
el.innerHTML = '<p>Hello World!</p>' + el.innerHTML
```

## Match Element Selector
Check current elements against a CSS selector

```javascript
var el = document.querySelector('span')
console.log(el.matches('.bar'))
```

## Get Parent and Sibling Element Nodes

```javascript
var el = document.querySelector('div')

// select parent element node
var parent = el.parentNode

// prev and next siblings
var prev = el.previousSibling
var next = el.nextSibling
```

## Get a Query String From a Url
Quite a common task, and you can do this with plain ole JavaScript

```javascript
function getQueryString(name, url) {
  url = url ? url : window.location.href
  
  var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i')
  var string = reg.exec(url)
  return string ? string[1] : null
}

getQueryString('foo', 'http://www.quxx.com?foo=javascript&bar=functional')
// => "javascript"
```

## Create an Event Listener
Listen for different types of events likes clicks, hovers, etc

```javascript
var el = document.querySelector('.my-button-class')

el.addEventListener('click', function(event) {
  event.target.textContent = 'Click count: ' + event.detail 
  // Do more
}, false)
``` 

> assign a function to your variable for multiple events on same element
```javascript
var el = document.querySelector('.my-class')

var myFunction = function(event) {
	// Do something
}
el.addEventListener('click', myFunction, false)
el.addEventListener('hover', myFunction, false)
```

## Spawn a Web Worker
Run JavaScript code in the background with the use of web workers. Bring threading to a language that is single-threaded.

The basics of a web worker runs in an isolated thread. Send a message to your worker using `postMessage`
```javascript
/* main.js */
const worker = new Worker('work.js')
worker.postMessage('Hello World, do work')

/* work.js */
worker.onmessage = e => {
  console.log(e.data)
}  

worker.onerror = e => {
  console.error(e.message)
}

// => 'Hello World'
```
> send back a message to the main thread using `pushMessage`
```javascript
/* work.js */
worker.onmessage = e => {
  console.log(e.data)
  worker.pushMessage('I worked, this is what i have to say about it')
}

/* main.js */
const worker = new Worker('work.js')
worker.postMessage('Hello World, do work')

worker.onmessage = e => {
  console.log(e.data)
}

// => 'I worked, this is what i have to say about it'
```
> let's broaden our understanding and setup multiple listeners for the `message` event:
```javascript
/* work.js */
worker.addEventListener('message', function(e) {
    console.log(e.data)
    worker.pushMessage('hey')
  }, false)

worker.addEventListener('message', function(e) {
    console.log('Another message sent to main.js from worker.js')
  }, false)

worker.addEventListener('error', function(e) {
    console.log(e.message)
  }, false)
  
/* main.js */
const worker = new Worker('worker.js')
worker.postMessage('hello')

worker.addEventListener('message', function(e) { 
  console.log(e.data)
}, false)

// => 'Hey'
// => 'Another message sent to main.js from worker.js'
```
Workers run outside of the main app thread so they do not have the same access to all JS features that your main application does. You do not have access to:

* The DOM
* The `window` object
* The `parent` object
* All workers scrips must be served from the same domain

If you use a worker to handle a task that updates the main thread then you will need to use the messaging system between the worker and main thread.

## `pipe()` 
`pipe()` might be a tad bit out of scope for this repo, however you'll see numerous versions of it in open source libraries and therefore the interest to vanillify this useful functional function.

Below you'll find the most naive version of pipe
```javascript
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
  str.toUpperCase()
}

function first5Char(str) {
  return str.substring(0,6)
}

function uppercase(str) {
  return str.toUpperCase()
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
```

## Binary Search
We can also search an array using binary search, the caveat here is the array needs to be sorted and you create pointers to the left, right and middle of the array to track your indices.
This is much faster than linear search for 1000's or more items
```javascript
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
   if (arr[middle] == elem) {
     return middle
   }
   return -1     
}

binarySearch([1, 2, 4, 8, 12, 18, 22, 30, 50, 99, 100], 100)
// => 10

binarySearch([1, 2, 4, 8, 12, 18, 22, 30, 50, 99, 100], -1)
// => -1
```

## Create JavaScript Library Without Prototype
Create a simple library API without using the prototype chain and by just using a factory function - you'll often see this technique used in the wild (accompanied with other patterns, tbd)
```javascript
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
```

## Notes & Collaboration
This project is still W.I.P (work in progress) and will be updated intermittently. Please send a PR from a separate branch if you want to contribute.

// assert.js

function assert(value, descr) {
  const result = value ? 'pass' : 'fail'
  console.log(`${result} — ${descr}`)
}

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

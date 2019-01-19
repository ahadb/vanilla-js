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

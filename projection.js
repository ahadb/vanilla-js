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

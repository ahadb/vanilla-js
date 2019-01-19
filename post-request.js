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

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

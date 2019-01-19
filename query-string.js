function getQueryString(name, url) {
  url = url ? url : window.location.href

  var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i')
  var string = reg.exec(url)
  return string ? string[1] : null
}

getQueryString('foo', 'http://www.quxx.com?foo=javascript&bar=functional')
// => "javascript"

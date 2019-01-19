var el = document.createElement('div')
var textNode = document.createTextNode('Hello World')
el.appendChild(textNode)

// no insert it into the DOM tree
document.body.appendChild(el)

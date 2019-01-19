var el = document.querySelector('div')

// append to the element's content
el.innerHTML += '<p>Hello World!</p>'

// prepend to the element's content
el.innerHTML = '<p>Hello World!</p>' + el.innerHTML

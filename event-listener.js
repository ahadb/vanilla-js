var el = document.querySelector('.my-button-class')

el.addEventListener('click', function(event) {
  event.target.textContent = 'Click count: ' + event.detail
  // Do more
}, false)

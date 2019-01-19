var el = document.getElementsByTagName('a')

// get the number of selected items
console.log(el.length)

// loop or iterate over elements and output href values
for (var i = 0; i < el.length; i++) {
  console.log(el[i].href)
}

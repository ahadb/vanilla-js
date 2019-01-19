var data = [
  { id: 1, name: 'Anthony', skill: 'Frontend' },
  { id: 2, name: 'Ibrahim', skill: 'Backend' },
  { id: 3, name: 'Maeesha', skill: 'UX' }
]

var tableStr = ""

for (var i = 0; i < data.length; i++) {
  tableStr += "<tr>"
  tableStr +=   "<td>"+ data[i].id +"</td>"
  tableStr +=   "<td>"+ data[i].name +"</td>"
  tableStr +=   "<td>"+ data[i].skill +"</td>"
  tableStr += "</tr>"
}

document.querySelector('tbody').innerHTML = tableStr

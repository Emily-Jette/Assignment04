// These buttons lead from index.html to index2 and index3
document.getElementById('gallery').addEventListener('click', newPage)

function newPage () {
  window.location = 'https://assignment04.emilyjette.repl.co/gallery.html'
}

document.getElementById('fact-page').addEventListener('click', nextPage)

function nextPage () {
  window.location = 'https://assignment04.emilyjette.repl.co/index3.html'
}

document.getElementById('home').addEventListener('click', backPage)

function backPage () {
  window.location = 'https://assignment04.emilyjette.repl.co/'
}

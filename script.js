// These buttons lead from index.html to index2 and index3
document.getElementById('gallery').addEventListener('click', newPage)

document.getElementById('fact-page').addEventListener('click', nextPage)

function newPage () {
  window.location = 'https://assignment04.emilyjette.repl.co/gallery.html'
}

function nextPage () {
  window.location = 'https://assignment04.emilyjette.repl.co/index3.html'
}

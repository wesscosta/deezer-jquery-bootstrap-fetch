const track = document.querySelector("#track")
const ListUl = document.querySelector("#lista")
const button = document.querySelector("#btn")
const inputext = document.querySelector("#inputext")


const showData = (result) => {
  let songs = result.data
  const generator = songs.map(song => `
  <li>
  <br>
    <div class="row col col-12">
      <div class="col-1 tab"></div>
      <div class="col-1 tab"><img width="60" height="60" src="${song.album.cover_xl}"></img></div>
      <div class="col-3 tab"><p><b> ${song.artist.name} </b></p><p> ${song.title} </p></div>
      <div class="col-4 tab"><audio controls><source src="${song.preview}" type="audio/ogg"></audio></div>
      <div class="col-1 tab"><p><b>${parseInt(song.duration / 60) + ':' + String(parseInt(song.duration % 60)).padStart(2, 0)}</b></p></div>
      <div class="col-3 tab"></div>
  </li>`)
  .join('')
  ListUl.innerHTML = generator
}

const showPlaylist = (result) => {
  let songs = result.tracks.data
  const generator = songs.map(song => `
  <li>
  <br>
    <div class="row col col-12">
      <div class="col-1"></div>
      <div class="col-1 tab"><img width="80" height="80" src="${song.album.cover_xl}"></img></div>
      <div class="col-3 tab"><p><b> ${song.title} </b></p><p> ${song.artist.name} </p></div>
      <div class="col-4 tab"><audio controls><source src="${song.preview}" type="audio/ogg"></audio></div>
      <div class="col-1 tab"><p><b>${parseInt(song.duration / 60) + ':' + String(parseInt(song.duration % 60)).padStart(2, 0)}</b></p></div>
      </div><div class="col-3"></div>
      </li>`)
    .join('')
  ListUl.innerHTML = generator
}

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}

function searchForTracks() {
  fetch(`http://localhost:3333/search?q=${track.value}`, options)
    .then(response => {
      response.json()
        .then(data => {
          showData(data)
          console.log(data)
        })
    })
    .catch(e => console.log('Deu Erro: ' + e, message))
}

function goBackInitialTracks() {
  let search = track.value.replace()
  fetch(`http://localhost:3333/playlist/1111141961`, options)
    .then(response => {
      response.json()
        .then(data => {
          showPlaylist(data)
          console.log(data)
        })
    })
    .catch(e => console.log('Deu Erro: ' + e, message))
}

const form = document.querySelector("#form")
form.addEventListener('submit', function (event) {
  event.preventDefault()
  if (document.getElementById("track").value == "") {
    goBackInitialTracks();
  } else {
    searchForTracks();
  }
});

function conte(inicio, fim) {
  let result = []
  for (number = inicio; number <= fim; number++) {
    result.push(number)
  }
  return result
}

// Autor: Weslley Costa

const url = "http://localhost:3000/films/"

document.addEventListener('DOMContentLoaded', () => {
    const fetchFirstFilm = () => {
        fetch(url)
       .then(response => response.json())
       .then(data => { renderFirstFilm(data) })
      }
       fetchFirstFilm();
      
       
       
  })

  function renderFirstFilm(film){
  // const films = document.getElementById('films')

  const title = document.getElementById('title')
title.innerText = film.title

const runtime = document.getElementById('runtime')
runtime.innerText = `${film.runtime} MINUTES`

const showtime = document.getElementById('showtime')
showtime.innerText = film.showtime

const description = document.getElementById('film-info')
description.innerText = film.description

// const ticketSpan = document.getElementById('ticket-num')
  }
 

// tickets available 

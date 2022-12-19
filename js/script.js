let url = "https://pmihango.github.io/ph-1-code-challenge-week-3/database.json"

document.addEventListener('DOMContentLoaded', () => {

    const FilmRow = document.getElementById('random-film')
    const homeLink = document.getElementById('home-link')

    homeLink.addEventListener('click', () => {
       
        FilmRow.style.display = "flex"
    })

    const createFilm = (poster, title, runtime, showtime) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-10', 'px-2', 'mb-5')
        cardDiv.setAttribute('id', 'carddivv')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-2')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-2', 'card-body')

        const filmImg = document.createElement('img')
        filmImg.classList.add('card-img', 'h-100')
        filmImg.src = poster
        filmImg.objectFit = 'cover'

        const filmTitle = document.createElement('h3')
        filmTitle.classList.add('card-title')
        filmTitle.textContent = title

        const filmRuntime = document.createElement('p')
        filmRuntime.classList.add('card-text')
        filmRuntime.textContent = runtime

        const filmShowtime = document.createElement('p')
        filmShowtime.classList.add('card-text')
        filmShowtime.textContent = showtime
        bodyDiv.appendChild(filmTitle)
        bodyDiv.appendChild(filmRuntime)
        bodyDiv.appendChild(filmShowtime)
        

        // append image elements
        imgDiv.appendChild(filmImg)

        // append divs to row
        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        // append row to card
        cardDiv.appendChild(rowDiv)

        

        // return the cardDiv
        return cardDiv
    }

    
    let loadFilm = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.films);
            let filmData = data.films[0]
            let title = "Film Title : " + filmData.title
            let poster = filmData.poster
            let runtime = "Runtime : " + filmData.runtime + " Minutes"
            let showtime = "Showtime : " + filmData.showtime
            // let tickets_sold = "Tickets Sold : " + filmData.tickets_sold
            // let capacity = "Capacity : " + filmData.capacity
            // let remTicks = "Remaining Tickets : " + filmData.remTickets

            let filmElement = createFilm(poster, title, runtime, showtime)
            FilmRow.appendChild(filmElement)

        })
    }
        function getFilm() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                data.films.forEach(film => {
                    // console.log(film);
                    displayAllFilms(film)
                    // getOneFilm(film)
                });
            });
            
        
        }



        
        function displayAllFilms(film){
            let title = document.createElement('p')
            title.textContent = film.title
            let main = document.getElementById("random-film")
            main.append(title)

         

            title.addEventListener('click', () =>{
                // createFilm()
                getOneFilm(film)
                // hiddenDiv.removeAttribute('hidden')
                hiddenDiv2 = document.getElementById('carddivv').hidden = true
                hiddenDiv = document.getElementById('div1').hidden = false
                // hiddenDiv3 = document.getElementById()
                
            })
            // let rootDiv = document.createElement('div')
            // rootDiv.classList.add('col-4', 'p-1')
        
            
            // return rootDiv
        }

        function getOneFilm(film) {
            document.getElementById("title").textContent = "Film Title : " + film.title
            document.getElementById("poster").src = film.poster
            document.getElementById("runtime").textContent = "Runtime: " + film.runtime + " Minutes"
            document.getElementById("showtime").textContent = "Showtime: " + film.showtime

            let ticketRem = document.getElementById('ticketno')
            // tickets available would be film.capacity string minus film.tickets_sold
            let capacityConvert = parseInt(film.capacity, 10)
            ticketRem.textContent = "Remaining Tickets: " + (capacityConvert - film.tickets_sold)
            
         
                    
                }
            
          
        
        let loadTitles = () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    let titleNames = data.films
                    let titleElems = titleNames.map(
                        filmss => displayAllFilms(filmss.title)
                    )
                    FilmRow.append(...titleElems)
                })
        
    }

  
   

   loadFilm()
  getFilm()
  loadTitles()
//   buyTicket()
//   getOneFilm()

})
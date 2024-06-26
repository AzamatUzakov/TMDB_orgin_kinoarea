import axios, { all } from "axios"
const PICTURE_URL = import.meta.env.VITE_PICTURE_URL

let fil_titl = document.querySelectorAll('.hrefs')
let release_date = document.querySelectorAll('.release_date')
let burger_menu = document.querySelector('.title img')
let menu = document.querySelector('.menu')
let close_img = document.querySelector('.close')
let Auto_res = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M'
  }
}
let showingAllPosters = false
let poster_contener = document.querySelector('.poster_contener')

let rear_background = document.querySelector('.rear_background')

let trailerIframe = document.querySelector('.trailer iframe')

let horrorBtn = document.querySelector('.horror')



fil_titl.forEach(btn => {
  btn.onclick = () => {

    fil_titl.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')
  }
});

release_date.forEach(btn => {
  btn.onclick = () => {

    release_date.forEach(btn => btn.classList.remove('act_color'))
    btn.classList.add('act_color')
  }
});


burger_menu.onclick = () => {
  menu.style.display = "block"
}
close_img.onclick = () => {
  menu.style.display = "none"
}

let horor_arr = []
let comedy_arr = []
let all_arr
let criminal_arr = []
let drama_arr = []
let fantasy_arr = []
let action_arr = []
let family_arr = []



fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Auto_res)
  .then(res => res.json())
  .then(res => reload_NowPlaying(res.results))



function reload_NowPlaying(arr) {

  poster_contener.innerHTML = ""
  const toShow = showingAllPosters ? arr.length : 8

  for (let item of arr.slice(0, toShow)) {


    let add_new_btn = document.querySelector('.add_new_btn')
    let main_poster_box = document.createElement('div')
    let poster_img = document.createElement('div')
    let on_hovered = document.createElement('div')
    let movie_card_btn = document.createElement('button')
    let rating = document.createElement('div')
    let main_poster_box_h3 = document.createElement('h3')
    let main_poster_box_p = document.createElement('p')


    rating.innerHTML = item.vote_average.toFixed(1, 2)
    movie_card_btn.innerHTML = "Карточка фильма"
    main_poster_box_h3.innerHTML = item.title/* .slice(0, 35) */


    poster_img.style.backgroundImage = `url(${PICTURE_URL + item.poster_path})`

    main_poster_box.classList.add("main_poster_box")
    poster_img.classList.add("poster_img")
    on_hovered.classList.add("on_hovered")
    movie_card_btn.classList.add("movie_card_btn")
    rating.classList.add("rating")
    main_poster_box_h3.classList.add("h3")
    main_poster_box_p.classList.add("p")

    poster_contener.append(main_poster_box)
    main_poster_box.append(poster_img, main_poster_box_h3, main_poster_box_p)
    poster_img.append(on_hovered, rating)
    on_hovered.append(movie_card_btn)


    movie_card_btn.onclick = () => {
      location.href = "/pages/movie/index.html?id=" + item.id
      let poster_id = localStorage.setItem("post_id", item.id)
      //let poster_id = location.search.split('=').at(-1)

    }

    poster_img.onmouseenter = () => {
      on_hovered.style.display = "block"
      setTimeout(() => {
        rear_background.style.backgroundImage = `url(${PICTURE_URL + item.backdrop_path})`
        on_hovered.style.opacity = 1

      }, 7);

    }

    poster_img.onmouseleave = () => {
      on_hovered.style.display = "none"

      setTimeout(() => {
        on_hovered.style.opacity = 0
      }, 7);
    }

    add_new_btn.innerHTML = showingAllPosters ? 'Скрыть' : 'Показать все'
    add_new_btn.onclick = () => {
      // showPosters.style.scale = '0.8'
      showingAllPosters = !showingAllPosters
      reload_NowPlaying(arr)




    }




    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, Auto_res)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        let info_ganr_tx = ``
        for (const el of item.genre_ids) {
          const genres = res.genres.filter(obj => obj.id === el);
          info_ganr_tx = info_ganr_tx + genres[0].name + `, `


          if (item.genre_ids === el) {
            all_arr.push(item)
          }
          /*   for (item.genre_ids of info_ganr_tx) {
               console.log(item);
              if (item === "Horror") {
                horor_arr.push(item)
              } else if (item.genre_ids === "Comedy") {
                comedy_arr.push(item)
              }
          
            } */

        }
        main_poster_box_p.innerHTML = info_ganr_tx.slice(0, -2)


      })
  }
}



fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Auto_res)
  .then(res => res.json())
  .then(res => showTrailers(res.results))

function showTrailers(arr) {
  let trailerList_box = document.querySelector('.trailer__list__box')
  
  for (let item of arr) {

    let listElem = document.createElement('div')
    let posters = document.createElement('div')
    let player = document.createElement('div')
    let playerImg = document.createElement('img')
    let mantle = document.createElement('div')
    let trNamae = document.createElement('div')

    listElem.classList.add('list__elem')
    posters.classList.add('posters_')
    player.classList.add('player_')
    trNamae.classList.add('trailer__name')

    playerImg.src = "public/Polygon 2.png"
    trNamae.innerHTML = item.title.slice(0, 20) + "..."
    posters.style.backgroundImage = `url(${PICTURE_URL + item.backdrop_path})`


    trailerList_box.append(listElem)
    listElem.append(posters, trNamae)
    posters.append(player, mantle)
    player.append(playerImg)

    listElem.onmouseenter = () => {
      mantle.classList.add('active__mantle')


    }

    listElem.onmouseleave = () => {
      mantle.classList.remove('active__mantle')


    }


    fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, Auto_res)
      .then(res => res.json())
      .then(res => {
        let rnd = Math.floor(Math.random() * res.results.length)
        let selectedMovie = res.results[rnd]

        player.onclick = () => {
          trailerIframe.src = `https://www.youtube.com/embed/${selectedMovie.key}`
        }
        mantle.onclick = () => {
          trailerIframe.src = `https://www.youtube.com/embed/${selectedMovie.key}`
        }

      })

  }
}



fetch("https://api.themoviedb.org/3/movie/popular", Auto_res)
.then(res=> res.json())
.then(res=>popular_films(res.results))
function popular_films(arr) {
  let popular_contener = document.querySelector('.swiper-wrapper')

  for(let item of arr){
    let swiperSlide = document.createElement('div')

    let main_poster_box = document.createElement('div')
    let poster_img = document.createElement('div')
    let on_hovered = document.createElement('div')
    let movie_card_btn = document.createElement('button')
    let rating = document.createElement('div')
    let main_poster_box_h3 = document.createElement('h3')
    let main_poster_box_p = document.createElement('p')


    rating.innerHTML = item.vote_average.toFixed(1, 2)
    movie_card_btn.innerHTML = "Карточка фильма"
    main_poster_box_h3.innerHTML = item.title/* .slice(0, 35) */

    poster_img.style.backgroundImage = `url(${PICTURE_URL + item.poster_path})`


    swiperSlide.classList.add('swiper-slide')
    main_poster_box.classList.add("main_poster_box")
    poster_img.classList.add("poster_img")
    on_hovered.classList.add("on_hovered")
    movie_card_btn.classList.add("movie_card_btn")
    rating.classList.add("rating")/* 
    main_poster_box_h3.classList.add("h3")
    main_poster_box_p.classList.add("p")
 */
    popular_contener.append(swiperSlide)
    swiperSlide.append(main_poster_box)
    main_poster_box.append(poster_img, main_poster_box_h3, main_poster_box_p)
    poster_img.append(on_hovered, rating)
    on_hovered.append(movie_card_btn)


    movie_card_btn.onclick = () => {
      location.href = "/pages/movie/index.html?id=" + item.id
      let poster_id = localStorage.setItem("post_id", item.id)
      //let poster_id = location.search.split('=').at(-1)

    }

    poster_img.onmouseenter = () => {
      on_hovered.style.display = "block"
      setTimeout(() => {
        rear_background.style.backgroundImage = `url(${PICTURE_URL + item.backdrop_path})`
        on_hovered.style.opacity = 1

      }, 7);

    }

    poster_img.onmouseleave = () => {
      on_hovered.style.display = "none"

      setTimeout(() => {
        on_hovered.style.opacity = 0
      }, 7);
    }

    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, Auto_res)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      let info_ganr_tx = ``
      for (const el of item.genre_ids) {
        const genres = res.genres.filter(obj => obj.id === el);
        info_ganr_tx = info_ganr_tx + genres[0].name + `, `


        if (item.genre_ids === el) {
          all_arr.push(item)
        }
        /*   for (item.genre_ids of info_ganr_tx) {
             console.log(item);
            if (item === "Horror") {
              horor_arr.push(item)
            } else if (item.genre_ids === "Comedy") {
              comedy_arr.push(item)
            }
        
          } */

      }
      main_poster_box_p.innerHTML = info_ganr_tx.slice(0, -2)


    })



  }
}




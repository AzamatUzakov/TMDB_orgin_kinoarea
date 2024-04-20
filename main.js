import axios, { all } from "axios"
const PICTURE_URL = import.meta.env.VITE_PICTURE_URL

let fil_titl = document.querySelectorAll('.hrefs')
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



let horrorBtn = document.querySelector('.horror')


fil_titl.forEach(btn => {
  btn.onclick = () => {

    fil_titl.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')
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
  console.log(arr);
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


    let fixed_gnr = item.vote_average
    movie_card_btn.innerHTML = "0"
    rating.innerHTML =fixed_gnr
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
      console.log(poster_id);

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
          console.log(genres);

          
          if(item.genre_ids === el){
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
horrorBtn.onclick = () => {
  reload_NowPlaying(comedy_arr)
}
console.log(all_arr);


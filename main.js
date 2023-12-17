import axios from "axios"
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


fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Auto_res)
  .then(res => res.json())
  .then(res => reload_NowPlaying(res.results))



function reload_NowPlaying(arr) {
  console.log(arr);
  for (let item of arr) {

    let poster_contener = document.querySelector('.poster_contener')

    let main_poster_box = document.createElement('div')
    let poster_img = document.createElement('div')
    let on_hovered = document.createElement('div')
    let movie_card_btn = document.createElement('button')
    let rating = document.createElement('div')
    let main_poster_box_h3 = document.createElement('h3')
    let main_poster_box_p = document.createElement('p')

    movie_card_btn.innerHTML = "Карточка фильма"
    rating.innerHTML = item.vote_average
    main_poster_box_h3.innerHTML = item.title
    main_poster_box_p.innerHTML = "Триллер"

    poster_img.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path}}`

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


    poster_img.onmouseenter = () => {
      console.log("enter");
      on_hovered.style.display = "block"
      setTimeout(() => {

        on_hovered.style.opacity = 1

      }, 7);

    }

    poster_img.onmouseleave = () => {
      console.log("leave");
      on_hovered.style.display = "none"

      setTimeout(() => {

        on_hovered.style.opacity = 0

        //       movie_card_btn.style.scale = 0

      }, 7);
    }
  }
}


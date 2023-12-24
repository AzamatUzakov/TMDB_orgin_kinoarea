
let likes_btn = document.querySelector(".elem_like")
let dislike_btn = document.querySelector(".elem_dislike")
let up_count = document.querySelector('#up')
let down_count = document.querySelector('#down')


up_count.innerHTML = Math.round(Math.random()*1000)
down_count.innerHTML = Math.round(Math.random()*1000)
likes_btn.onclick = () => {
up_count.innerHTML++
}
dislike_btn.onclick = () => {
    down_count.innerHTML++
    }




let fil_titl = document.querySelectorAll('.hrefs')
let burger_menu = document.querySelector('.title img')
let menu = document.querySelector('.menu')
let close_img = document.querySelector('.close')

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


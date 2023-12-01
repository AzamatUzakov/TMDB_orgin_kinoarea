let close_modal = document.querySelector('.close')
let menu = document.querySelector('.menu')
let burger_menu = document.querySelector('.burger_menu')


console.log(close_modal);
close_modal.onclick = () => {
    menu.style.display = "none"
    menu.style.opacity = 0
    //  menu.style.display = "none"

    console.log('click');
}


burger_menu.onclick = () => {
    menu.style.display = "block"
}
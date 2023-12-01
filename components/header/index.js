/* let close_modal = document.createElement('.close')
let menu = document.createElement('.menu')
let burger_menu = document.createElement('.burger_menu')


console.log(close_modal);
close_modal.onclick = () => {
    menu.style.display = "none"
    menu.style.opacity = 0
    //  menu.style.display = "none"

    console.log('click');
}


burger_menu.onclick = () => {
    menu.style.display = "block"
} */



function header() {
    let header_cont = document.querySelector('header')

    let first_option_contener = document.createElement('div')
    let icon_box = document.createElement('div')

    let cinem_of_title_flex_case = document.createElement('div')
    let cinem_of_title_flex_case_cinema_img = document.createElement('img')
    let cinem_of_title_flex_case_kino_img = document.createElement('img')

    let application_flex_case = document.createElement('div')
    let application_flex_case_vk = document.createElement('img')
    let application_flex_case_inst = document.createElement('img')
    let application_flex_case_face = document.createElement('img')
    let application_flex_case_twit = document.createElement('img')

    let hot_hrefs_case = document.createElement('div')
    let hot_hrefs_case_a_one = document.createElement('a')
    let hot_hrefs_case_a_two = document.createElement('a')
    let hot_hrefs_case_a_three = document.createElement('a')
    let hot_hrefs_case_a_foor = document.createElement('a')
    let hot_hrefs_case_a_five = document.createElement('a')
    let hot_hrefs_case_a_six = document.createElement('a')
    let hot_hrefs_case_a_seven = document.createElement('a')


    let search_and_btn_flex_box = document.createElement('div')
    let search_btn = document.createElement('div')
    let search_btn_img = document.createElement('img')
    let first_add_btn = document.createElement('button')
    ///////first_option_contener///////


    let second_option_contener = document.createElement('div')
    let flex_second_case = document.createElement('div')

    let burger_menu_and_search_btn_flex_box = document.createElement('div')
    let burger_menu = document.createElement('div')
    let burger_menu_img = document.createElement('img')
    let second_search_btn = document.createElement('div')
    let second_search_btn_img = document.createElement('img')

    let second_icon_box = document.createElement('div')
    let cinem_and_kinoarea_flex_box = document.createElement('div')
    let cinem_and_kinoarea_flex_box_first_img = document.createElement('img')
    let cinem_and_kinoarea_flex_box_second_img = document.createElement('img')
    let aplication_flex_box = document.createElement('div')
    let aplication_flex_box_vk = document.createElement('img')
    let aplication_flex_box_inst = document.createElement('img')
    let aplication_flex_box_face = document.createElement('img')
    let aplication_flex_box_twit = document.createElement('img')

    let second_add_btn = document.createElement('button')
    let hot_href_box = document.createElement('div')
    let hot_href_box_one = document.createElement('a')
    let hot_href_box_two = document.createElement('a')
    let hot_href_box_three = document.createElement('a')
    let hot_href_box_foor = document.createElement('a')
    let hot_href_box_five = document.createElement('a')
    let hot_href_box_six = document.createElement('a')
    let hot_href_box_seven = document.createElement('a')
    ///////////second_contener///////////////



    let menu = document.createElement('div')
    let box = document.createElement('div')
    let close_img = document.createElement('img')
    let icon_case = document.createElement('div')
    let icon_case_cinem = document.createElement('img')
    let icon_case_kinoarea = document.createElement('img')

    let hot_href_menu = document.createElement('div')
    let hot_href_menu_one = document.createElement('a')
    let one_br = document.createElement('br')
    let hot_href_menu_two = document.createElement('a')
    let two_br = document.createElement('br')
    let hot_href_menu_three = document.createElement('a')
    let three_br = document.createElement('br')
    let hot_href_menu_foor = document.createElement('a')
    let foor_br = document.createElement('br')
    let hot_href_menu_five = document.createElement('a')
    let five_br = document.createElement('br')
    let hot_href_menu_six = document.createElement('a')
    let six_br = document.createElement('br')
    let hot_href_menu_seven = document.createElement('a')


    hot_hrefs_case_a_one.innerHTML = "Афиша"
    hot_hrefs_case_a_two.innerHTML = "Медиа"
    hot_hrefs_case_a_three.innerHTML = "Фильмы"
    hot_hrefs_case_a_foor.innerHTML = "Актёры"
    hot_hrefs_case_a_five.innerHTML = "Новости"
    hot_hrefs_case_a_six.innerHTML = "Подборки"
    hot_hrefs_case_a_seven.innerHTML = "Категории"

    hot_href_box_one.innerHTML = "Афиша"
    hot_href_box_two.innerHTML = "Медиа"
    hot_href_box_three.innerHTML = "Фильмы"
    hot_href_box_foor.innerHTML = "Актёры"
    hot_href_box_five.innerHTML = "Новости"
    hot_href_box_six.innerHTML = "Подборки"
    hot_href_box_seven.innerHTML = "Категории"

    hot_href_menu_one.innerHTML = "Афиша"
    hot_href_menu_two.innerHTML = "Медиа"
    hot_href_menu_three.innerHTML = "Фильмы"
    hot_href_menu_foor.innerHTML = "Актёры"
    hot_href_menu_five.innerHTML = "Новости"
    hot_href_menu_six.innerHTML = "Подборки"
    hot_href_menu_seven.innerHTML = "Категории"


    hot_hrefs_case_a_two.href = "#"
    hot_hrefs_case_a_three.href = "#"
    hot_hrefs_case_a_foor.href = "#"
    hot_hrefs_case_a_five.href = "#"
    hot_hrefs_case_a_six.href = "#"
    hot_hrefs_case_a_seven.href = "#"

    hot_href_box_one.href = "#"
    hot_href_box_two.href = "#"
    hot_href_box_three.href = "#"
    hot_href_box_foor.href = "#"
    hot_href_box_five.href = "#"
    hot_href_box_six.href = "#"
    hot_href_box_seven.href = "#"

    hot_href_menu_one.href = "#"
    hot_href_menu_two.href = "#"
    hot_href_menu_three.href = "#"
    hot_href_menu_foor.href = "#"
    hot_href_menu_five.href = "#"
    hot_href_menu_six.href = "#"
    hot_href_menu_seven.href = "#"

    first_add_btn.innerHTML = "Войти"
    second_add_btn.innerHTML = "Войти"


    cinem_of_title_flex_case_cinema_img.src = "/public/cinema 1.png"
    cinem_of_title_flex_case_kino_img.src = "/public/Kinoarea.png"
    cinem_and_kinoarea_flex_box_first_img.src = "/public/cinema 1.png"
    cinem_and_kinoarea_flex_box_second_img.src = "/public/Kinoarea.png"
    icon_case_cinem.src = "/public/cinema_menu.png"
    icon_case_kinoarea.src = "/public/Kinoarea_menu.png"

    application_flex_case_vk.src = "/public/vk.png"
    application_flex_case_inst.src = "/public/instagram.png"
    application_flex_case_face.src = "/public/facebook.png"
    application_flex_case_twit.src = "/public/twitter.png"

    aplication_flex_box_vk.src = "/public/vk.png"
    aplication_flex_box_inst.src = "/public/instagram.png"
    aplication_flex_box_face.src = "/public/facebook.png"
    aplication_flex_box_twit.src = "/public/twitter.png"

    search_btn_img.src = "/public/search.svg"
    second_search_btn_img.src = "/public/search.svg"
    close_img.src = "/public/close_menu.png"
    burger_menu_img.src = "/public/burger_menu.png"


    first_option_contener.classList.add('first_option_contener')
    icon_box.classList.add('icon_box')

    cinem_of_title_flex_case.classList.add('cinem_of_title_flex_case')
    application_flex_case.classList.add('application_flex_case')
    hot_hrefs_case.classList.add('hot_hrefs_case')
    search_and_btn_flex_box.classList.add('search_and_btn_flex_box')
    search_btn.classList.add('search_btn')
    first_add_btn.classList.add('add_btn')

    second_option_contener.classList.add('second_option_contener')
    flex_second_case.classList.add('flex_second_case')
    burger_menu_and_search_btn_flex_box.classList.add('burger_menu_and_search_btn_flex_box')
    second_search_btn.classList.add('second_search_btn')
    burger_menu.classList.add('burger_menu')

    second_icon_box.classList.add('second_icon_box')
    cinem_and_kinoarea_flex_box.classList.add('cinem_and_kinoarea_flex_box')
    aplication_flex_box.classList.add('aplication_flex_box')

    second_add_btn.classList.add('add_btn')
    hot_href_box.classList.add('hot_href_box')
    menu.classList.add('menu')
    box.classList.add('box')
    close_img.classList.add('close')
    icon_case.classList.add('icon_case')
    hot_href_menu.classList.add('hot_href_menu')


    header_cont.append(first_option_contener, second_option_contener)

    first_option_contener.append(icon_box, hot_hrefs_case, search_and_btn_flex_box)
    icon_box.append(cinem_of_title_flex_case, application_flex_case)
    cinem_of_title_flex_case.append(cinem_of_title_flex_case_cinema_img, cinem_of_title_flex_case_kino_img)
    application_flex_case.append(application_flex_case_vk, application_flex_case_inst, application_flex_case_face, application_flex_case_twit)
    hot_hrefs_case.append(hot_hrefs_case_a_one, hot_hrefs_case_a_two, hot_hrefs_case_a_three, hot_hrefs_case_a_foor, hot_hrefs_case_a_five, hot_hrefs_case_a_six, hot_hrefs_case_a_seven)
    search_and_btn_flex_box.append(search_btn, first_add_btn)
    search_btn.append(search_btn_img)


    second_option_contener.append(flex_second_case, hot_href_box, menu)
    flex_second_case.append(burger_menu_and_search_btn_flex_box, second_icon_box, second_add_btn)
    burger_menu_and_search_btn_flex_box.append(burger_menu, second_search_btn)
    burger_menu.append(burger_menu_img)
    second_search_btn.append(second_search_btn_img)
    second_icon_box.append(cinem_and_kinoarea_flex_box, aplication_flex_box)
    cinem_and_kinoarea_flex_box.append(cinem_and_kinoarea_flex_box_first_img, cinem_and_kinoarea_flex_box_second_img)
    aplication_flex_box.append(aplication_flex_box_vk, aplication_flex_box_inst, aplication_flex_box_face, aplication_flex_box_twit)
    hot_href_box.append(hot_href_box_one, hot_href_box_two, hot_href_box_three, hot_href_box_foor, hot_href_box_five, hot_href_box_six, hot_href_box_seven)

    menu.append(box)
    box.append(close_img, icon_case, hot_href_menu)
    icon_case.append(icon_case_cinem, icon_case_kinoarea)
    hot_href_menu.append(hot_href_menu_one, one_br, hot_href_menu_two, two_br, hot_href_menu_three, three_br, hot_href_menu_foor, foor_br, hot_href_menu_five, five_br, hot_href_menu_six, six_br, hot_href_menu_seven)

    burger_menu.onclick = () => {
        menu.style.display = "block"
    }
    close_img.onclick = () => {
        menu.style.display = "none"
    }
}
header()
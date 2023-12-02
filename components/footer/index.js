function footer() {
  let container = document.querySelector(".container");
  let footerSide = document.createElement("div");
  let logo = document.createElement("div");
  let img = document.createElement("img");
  let followEMAIL = document.createElement("div");
  let follow_h2 = document.createElement("h2");
  let follow_p = document.createElement("p");
  let follow_form = document.createElement("form");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let agry_flex = document.createElement("div");
  let agry = document.createElement("div");
  let checkbox = document.createElement("input");
  let agry_text = document.createElement("div");
  let agry_text_p = document.createElement("p");
  let agry_text_a = document.createElement("a");

  footerSide.classList.add("footer_side");
  logo.classList.add("logo");
  img.src = "/public/logo.png";
  followEMAIL.classList.add("follow_email");
  follow_h2.innerHTML = "Подпишитесь на E-mail рассылку";
  follow_p.innerHTML =
    "Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!";
  agry_flex.classList.add("agry_flex");
  agry.classList.add("agry");
  agry_text.classList.add("agry_text");
  agry_text_p.innerHTML = "Соглашаюсь на условия";
  agry_text_a.innerHTML = "политики конфиденциальности";
  agry_text_a.href = "#";
  button.innerHTML = "Потписаться";
  container.append(footerSide);
  footerSide.append(logo, followEMAIL);
  logo.append(img);
  followEMAIL.append(follow_h2, follow_p, follow_form, agry_flex);
  follow_form.append(input, button);
  agry_flex.append(agry, agry_text);
  agry.append(checkbox)
  agry_text.append(agry_text_p,agry_text_a)
}
footer()
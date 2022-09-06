'use strict';


const popup = document.querySelector('.popup');
const close = document.querySelector('.content a');

window.onload = function () {
  if (localStorage.getItem('popState') != "hide") {
    setTimeout(function () {
      popup.style.display = "block";
      localStorage.setItem('popState', "hide");
    }, 2000)
  }
}

close.addEventListener('click', () => {
  popup.style.display = "none";
  localStorage.setItem('popState', "hide");
})


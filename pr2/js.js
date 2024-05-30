'use strict';
AOS.init();
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  

    let timeString = hours + ':' + minutes;
    document.getElementById('data').textContent = timeString;
}

setInterval(updateClock, 1000);


let y = document.querySelector('.name');
let burgerbtn = document.querySelector('.burgermenu');
let isActive = false;
burgerbtn.addEventListener('click', function(){
    y.classList.add('jopa');
    y.classList.remove('jopa2');
})
let icon = document.querySelector('.icon');
icon.addEventListener('click', function(){
    y.classList.add('jopa2');
    y.classList.remove('jopa');
});

const gotop = document.querySelector('.go-top');
gotop.addEventListener('click', gotopp);
window.addEventListener('scroll', track);
function track() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset > coords) {
        gotop.classList.add('gotop-show');
    }
     else {
        gotop.classList.remove('gotop-show');
     }
};

function gotopp() {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -20);
        setTimeout(gotopp, 0);
    }
};
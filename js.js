'use strict';
const glavbur = document.querySelector('#glavbur');
const crest = document.querySelector('#crest');
const navv = document.querySelector('.navv');

glavbur.addEventListener('click', function(){ 
  navv.style.transform = 'translateX(0)';
  navv.style.transition = 'all 0.3s';
});
crest.addEventListener('click', function(){
    navv.style.transform = 'translateX(100%)';
    navv.style.transition = 'all 0.3s';
});

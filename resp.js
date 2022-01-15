burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
logo = document.querySelector('.logo')
nav_side = document.querySelector('.nav_side')

burger.addEventListener('click', ()=>
{
        //  nav.classList.toggle('v-class-resp');
         nav_side.classList.toggle('v-class-resp');
         logo.classList.toggle('v-class-resp');
         nav.classList.toggle('h-nav-resp');

})
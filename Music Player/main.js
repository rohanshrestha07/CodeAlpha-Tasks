let openList = document.querySelector('.queue-icon');
let closeList = document.querySelector('.close');
let body = document.querySelector('body');

openList.addEventListener('click',()=>{
    body.classList.add('active');
})
closeList.addEventListener('click',()=>{
    body.classList.remove('active');
})
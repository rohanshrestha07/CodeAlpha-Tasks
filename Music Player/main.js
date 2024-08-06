const openList = document.querySelector('.queue-icon');
const closeList = document.querySelector('.close');
const body = document.querySelector('body');

openList.addEventListener('click',()=>{
    body.classList.add('active');
})
closeList.addEventListener('click',()=>{
    body.classList.remove('active');
})

// to toggle profile
const threeDot = document.querySelector("#three-dot");
const profile = document.querySelector(".profile");

threeDot.addEventListener("click",()=>{
    let getText = threeDot.innerText;
    switch(getText){
        case "more_horiz":
            threeDot.innerText = "close";
            break; 
            case "close":
            threeDot.innerText = "more_horiz";
            break; 
    }
})
threeDot.addEventListener("click",()=>{
    let getText = threeDot.innerText;
    switch(getText){
        case "more_horiz":
            profile.style.display="none";
            break; 
            case "close":
            profile.style.display="block";
            break; 
    }
})


//share
const share = document.querySelector("#share");
const close = document.querySelector("#close-share");

share.addEventListener("click",()=>{
    body.classList.add('popup');
})
close.addEventListener("click",()=>{
    body.classList.remove('popup');
})


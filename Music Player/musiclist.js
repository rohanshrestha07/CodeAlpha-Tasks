const musicList = [
    {
        title:"Maya",
        artist:"Ashutosh KC",
        src:"Maya",
    },
    {
        title:"Chitthi Bhitra",
        artist:"Sajjan Raj Vaidya",
        src:"Chitthi Bhitra",
    },
    {
        title:"Lajayera",
        artist:"Sujan Chapagain",
        src:"Lajayera",
    },
    {
        title:"Birsiney Hau ki",
        artist:"The Elements",
        src:"Birsiney Hau Ki",
    },
    {
        title:"Ma Sanga Hidideu",
        artist:"Kelsang Shrestha",
        src:"Ma Sanga Hidideu",
    },
    {
        title:"Aashish",
        artist:"Bipul Chettri",
        src:"Aashish",
    },
    {
        title:"Aa Hai",
        artist:"Ekdev Limbu",
        src:"Aa Hai",
    },
    {
        title:"Behos",
        artist:"Sushant KC",
        src:"Behos",
    },
    {
        title:"Aakasai ma nau la.",
        artist:"Swoopna Suman",
        src:"Aakasai ma nau lakhey tara",
    },
    {
        title:"La Hai La Hai",
        artist:"Laure, Kavi & Dj Aj",
        src:"La Hai La Hai",
    },
]

//initializations
const container = document.querySelector(".container");
const music = document.querySelector('.song-details');
const titleElem = document.querySelector(".name");
const artistElm = document.querySelector('.artist');
const musicElm = document.getElementById('main-audio');
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const playpauseBtn = document.querySelector(".play-pause");
const progressArea = container.querySelector(".progress-area");
const progressBar = container.querySelector(".progress-bar");
const imgArea = document.querySelector(".img-area img");

// reading title and artist from array and displaying in screen
let currentMusic = 0;

const loadMusic = ()=>{
    const {title,artist} = musicList[currentMusic];
    console.log(title)
    console.log(artist);
    
    titleElem.innerHTML = `${title}`;
    artistElm.innerHTML=`${artist}`;
    musicElm.src = `songs/${musicList[currentMusic].src}.mp3`;
    
    // musicElm.addEventListener('loadeddata', playMusic);
    
    musicElm.load();
};
loadMusic();

// next song on click 
nextBtn.addEventListener('click',()=>{
    currentMusic++;
    
    if(currentMusic < musicList.length){
        loadMusic();
    }
    else{
        currentMusic = 0;
        loadMusic();
    }
    playMusic();
})

// prev song on click
prevBtn.addEventListener('click',()=>{
    currentMusic--;
    
    if(currentMusic >= 0){
        loadMusic();
    }
    else{
        currentMusic= musicList.length - 1;
        loadMusic();
    }
    playMusic();
})

// // let musicIndex = 1;

// //next music
// function nextMusic(){
//     //musicIndex++;
//     //musicIndex > musicList.length ? musicIndex = 1 : musicIndex = musicIndex;
//     loadMusic();
//     playMusic();
// }
// // prev music
// function prevMusic(){
//     //musicIndex--;
//     //musicIndex < 1 ? musicIndex = musicList.length : musicIndex = musicIndex;
//     loadMusic();
//     playMusic();
// }

// play button
playpauseBtn.addEventListener('click',()=>{
    const isMusicPaused = container.classList.contains("paused");
    
    isMusicPaused ? pauseMusic() : playMusic();
})
function playMusic(){
    container.classList.add("paused");
    playpauseBtn.querySelector("i").innerText = "pause";
    imgArea.classList.add("playing");
    musicElm.play();
}
function pauseMusic(){
    container.classList.remove("paused");
    playpauseBtn.querySelector("i").innerText = "play_arrow";
    imgArea.classList.remove("playing");
    musicElm.pause();
}

// update progressbar width according to music current time
musicElm.addEventListener("timeupdate",(e)=>{
    const currentTime = e.target.currentTime; //getting playing song currentime
    const duration = e.target.duration; //getting playing total song duration
    let progressWidth = (currentTime / duration)*100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = container.querySelector(".current-time");
    let musicDuration = container.querySelector(".max-duration");
    musicElm.addEventListener("loadeddata",()=>{
        
        //update song total duration
        let musicElmDuration = musicElm.duration;
        let totalMin = Math.floor(musicElmDuration / 60);
        let totalSec = Math.floor(musicElmDuration % 60);
        if(totalSec < 10){  //if set is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    })

    //update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){  //if set is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
})




//update playing song current width according to the progress bar width
progressArea.addEventListener("click",(e)=>{
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX;  //getting offset x value
    let songDuration = musicElm.duration;  //getting song total duration

    musicElm.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})



//repeat icons change to active on click
const repeatBtn = container.querySelector("#repeat-plist");

repeatBtn.addEventListener("click",()=>{
    let getText = repeatBtn.innerText;
    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title","song looped");
            break; 
            case "repeat_one":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title","song repeat");
            break; 
    }
})
//on click to repeat icon load the current music
musicElm.addEventListener("ended",()=>{
    let getText = repeatBtn.innerText;
    switch(getText){
        case "repeat":
            loadMusic(currentMusic);
            break; 
            case "repeat_one":
            musicElm.currentTime = 0; //setting music current time to 0
            loadMusic(currentMusic);
            playMusic();
            break; 
    }
})




//shuffle playlist 
const shuffleBtn = container.querySelector("#shuffle-plist");

shuffleBtn.addEventListener("click",()=>{
    let getText = shuffleBtn.innerText;
    switch(getText){
        case "shuffle":
            shuffleBtn.innerText = "shuffle_on";
            shuffleBtn.setAttribute("title","playlist shuffle");
            break; 
            case "shuffle_on":
            shuffleBtn.innerText = "shuffle";
            shuffleBtn.setAttribute("title","playlist loop");
            break; 
    }
})
musicElm.addEventListener("ended",()=>{
    let getText = shuffleBtn.innerText;
    switch(getText){
        case "shuffle":
            loadMusic(currentMusic);
            break; 
            case "shuffle_on":
            let randIndex = Math.floor((Math.random()*musicList.length) + 1);
            do{
                randIndex = Math.floor((Math.random()*musicList.length) +1);
            }while(currentMusic==randIndex);
            currentMusic = randIndex;
            loadMusic(currentMusic);
            playMusic();
            break; 
    }
})








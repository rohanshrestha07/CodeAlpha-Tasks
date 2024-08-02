const musicList = [
    {
        title:"Maya",
        artist:"Ashutosh KC",
        time:"4:00",
    },
    {
        title:"Batash",
        artist:"Shashwot Khadka",
        time:"3:00",
    },
    {
        title:"Birsiney Hau ki",
        artist:"The Elements",
        time:"3:50",
    },
    {
        title:"Aakha Ma aaune",
        artist:"Ekdev Limbu",
        time:"4:06",
    },
]

//initializations
const music = document.querySelector('.song-details');
const titleElem = document.querySelector(".name");
const artistElm = document.querySelector('.artist')
const nextBtn = document.getElementById("next");


// reading title and artist from array and displaying in screen
let currentMusic = 0;

const loadMusic = ()=>{
    const {title,artist} = musicList[currentMusic];
    console.log(title)
    console.log(artist);

    titleElem.innerHTML = `${title}`;
    artistElm.innerHTML=`${artist}`;
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
})
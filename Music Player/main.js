const openList = document.querySelector('.queue-icon');
const closeList = document.querySelector('.close');
const body = document.querySelector('body');

openList.addEventListener('click',()=>{
    body.classList.add('active');
})
closeList.addEventListener('click',()=>{
    body.classList.remove('active');
})

// const ulTag = container.querySelector("ul");

// //creating li tags according to our array length for list
// for (let i=0 ; i < musicList.length; i++){
//     let liTag = `<li>
//         <div class="row">
//             <span>${musicList[i].title}</span>
//             <p>${musicList[i].artist}</p>
//         </div>
//         <audio id="${musicList[i].src}" src="songs/${musicList[i].src}"></audio>
//         <span class="audio-duration">1:00</span>
//     </li>`;
//     ulTag.insertAdjacentHTML("beforeend",liTag);
// }


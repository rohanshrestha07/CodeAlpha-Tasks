//select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

//define the functionalButtons function for filterButtons
const functionalButtons = (e) =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);

    //iterate over each filterable card
    filterableCards.forEach(card => {
        //add "hide" class to hide the card initially
        card.classList.add("hide");
        //check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
}

//add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",functionalButtons));


//viewing image in big size
function imageview(ImgLink){
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "block";
}
function CloseFullView(){
    document.getElementById("FullImageView").style.display = "none";
}
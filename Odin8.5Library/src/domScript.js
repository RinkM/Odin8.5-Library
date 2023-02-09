

import {addToLibrary, renderLibrary} from "./library"



function renderMediaDetails (libraryItem) {
  const container = document.getElementById("container--mediaDetails")
  container.classList.remove("hidden")

  const mediaImage = document.getElementById("mediaDetails--image")
  mediaImage.src = libraryItem.imageSource
  
  const mediaTitle = document.getElementById("mediaDetails--title")
  const mediaYear = document.getElementById("mediaDetails--year")
  const mediaMaker= document.getElementById("mediaDetails--maker")

  mediaTitle.innerText = libraryItem.title;
  mediaYear.innerText = libraryItem.year;
  mediaMaker.innerText = libraryItem.maker;

  const addMediaBtn = document.getElementById("addMediaBtn")
  addMediaBtn.addEventListener('click', () => {
    addToLibrary(libraryItem);
    renderLibrary();
  })

}

export {renderMediaDetails, renderLibrary}




// used to return to home screen, like after pressing the add button.
const returnScreen =()=>{
  const library = document.getElementsByClassName("libraryContainer")[0];
  library.classList.remove('blur')
  
  const bookForm = document.getElementById('bookForm')
  bookForm.classList.add("hidden")

  const filmForm = document.getElementById('filmForm')
  filmForm.classList.add("hidden")

  const gameForm = document.getElementById('gameForm')
  gameForm.classList.add("hidden")

  const formSelector = document.getElementById('formSelector')
  formSelector.classList.add("hidden")
}


// after add button pressed.  blurs the screen and shows teh form selector.
const addForm =()=>{
    const library = document.getElementsByClassName("libraryContainer")[0];
    library.classList.add('blur')
    
    const bookForm = document.getElementById('bookForm')
    bookForm.classList.add("hidden")

    const filmForm = document.getElementById('filmForm')
    filmForm.classList.add("hidden")

    const gameForm = document.getElementById('gameForm')
    gameForm.classList.add("hidden")

    const formSelector = document.getElementById('formSelector')
    formSelector.classList.remove("hidden")


}




const hideDiv = (divId)=>{
  const hiddenDiv = document.getElementById(divId);
  hiddenDiv.classList.add("hidden");
}

const showDiv = (divId)=>{
  // hideFormSelector()
  const visibleDiv = document.getElementById(divId)
  visibleDiv.classList.remove("hidden")
}





function cardMaker(){
  library.map(object=> {

    const mediaCard = document.createElement("div")
    mediaCard.classList.add("media")

    const mediaInformation = document.createElement("fieldset")
    mediaInformation.classList.add("mediaContainer")
    mediaCard.id = `${object.itemId}`

    const legend = document.createElement("legend")
    legend.classList.add("legend")
    legend.classList.add("smallText")

    const finished = document.createElement("div");
    finished.classList.add("finishedStatus");
    
    if(object.mediaType == 'book'){
      mediaInformation.classList.add("bookBorder")
      legend.classList.add("bookBorder")
      legend.innerText = "Book"

    }else if(object.mediaType == 'film') {
      mediaInformation.classList.add("filmBorder")
      legend.classList.add("filmBorder")
      legend.innerText = "Film"
      
    }else if (object.mediaType == 'game'){
      mediaInformation.classList.add("gameBorder")
      legend.classList.add("gameBorder")
      legend.innerText = "Video Game"
    }
    
    const itemTitle = document.createElement("h1");
    itemTitle.classList.add("title");
    itemTitle.classList.add("largeText");
    itemTitle.textContent = `${object.title}`;

    const itemAuthor = document.createElement("div");
    itemAuthor.classList.add("author");
    itemAuthor.classList.add("smallText");
    itemAuthor.textContent = `${object.author}`;

    const itemYear = document.createElement("div");
    itemYear.classList.add("year");
    itemYear.classList.add("smallText");
    itemYear.textContent = `${object.year}`;

    const itemReview = document.createElement("div");
    itemReview.classList.add("review");
    itemReview.classList.add("smallText");
    itemReview.textContent = `${object.review}`;

    const itemNotes = document.createElement("div");
    itemNotes.classList.add("notes");
    itemNotes.classList.add("smallText");
    itemNotes.textContent = `${object.notes}`;

    mediaInformation.appendChild(legend);
    mediaInformation.appendChild(finished);
    mediaInformation.appendChild(itemTitle);
    mediaInformation.appendChild(itemAuthor);
    mediaInformation.appendChild(itemYear);
    mediaInformation.appendChild(itemReview);
    mediaInformation.appendChild(itemNotes);
    mediaCard.appendChild(mediaInformation);

    mediaCard.appendChild(makeDelButton())

    const libraryDiv = document.getElementsByClassName("libraryContainer")[0];
    libraryDiv.appendChild(mediaCard)
  })
}





function makeDelButton (){
  const delCard = document.createElement("div")
  delCard.classList.add("delCard")
  delCard.classList.add("hidden")
  delCard.classList.add("delCard")

  const delButton = document.createElement("button")
  delButton.classList.add("delButton")
  delButton.classList.add("material-symbols-outlined")
  delButton.textContent = "delete_forever";
  delButton.addEventListener('click', trashButton)
  
  delCard.appendChild(delButton);

  return delCard
  
}



function resetCards(){
  const library = document.getElementsByClassName("libraryContainer")[0];
    library.innerHTML = "";

}





function cardShake(){
  const libraryDiv = document.getElementsByClassName("mediaContainer")
  const allCards = Array.from(libraryDiv)
    allCards.map(card => {
    card.style.animation = "shake 1s";
      }
    )
    setTimeout (resetShake,1000)
    } 

// resets the shaking cards. 
function resetShake(){
const libraryDiv = document.getElementsByClassName("mediaContainer")
const allCards = Array.from(libraryDiv)
    allCards.map(card => {
      console.log(card.style.animation)
      card.style.removeProperty('animation')
        }
      )
    }


function editPress (){
  returnScreen()
  const delDiv = document.getElementsByClassName("delCard")
  const allDel = Array.from(delDiv);
  const delClasses = allDel[0].classList;
  allDel.map(card => {
    card.classList.toggle("hidden")
    }
  )
  if (Array.from(delClasses).indexOf('hidden') == true){
    console.log('hidden is true')
    resetShake()
    
  } else {
    console.log('hidden is false')
    
    cardShake()
  }
  }

function trashButton (evt){
   const selection = evt.target.parentElement.parentElement.id;
   removeMedia(selection)
}


function clickAway (evt){
  const selection = evt.target;
  console.log(selection)
}

window.addEventListener('click', clickAway) 
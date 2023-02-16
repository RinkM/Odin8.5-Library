
import createMediaObject from "./createMediaObject"
import {addToLibrary, renderLibrary, removeMedia} from "./library"

function clearInputValues (){
const inputs = [...document.getElementsByClassName("searchInput")]
inputs.map(input =>{input.value = ""})
}

const addMediaBtn = document.getElementById("headerAddBtn")
addMediaBtn.addEventListener("click", () => {
  openSearchWindow();
  clearInputValues();
  hideTrashBtn();
})


const cancelBtn = document.getElementById("cancelMediaBtn")
cancelBtn.addEventListener('click', () => closeSearchWindow())



function showSearchInput(type){
  const searchContainer = document.getElementById(`searchContainer--${type}`)
  searchContainer.classList.remove("hidden")
};

function openSearchWindow(){
  const searchContainer = document.getElementById("container--top");
  showSearchInput("Book")

  searchContainer.classList.toggle("hidden");
  searchContainer.classList.add("flex");
}


function closeSearchWindow(){
  const searchContainer = document.getElementById("container--top");
  console.log("test")
  searchContainer.classList.remove("flex");
  searchContainer.classList.add("hidden");
}



function renderMediaDetails (libraryItem) {
  const container = document.getElementById("container--mediaDetails")
  container.classList.remove("hidden")
  container.classList.remove("hiddenVisibility")

  const mediaImage = document.getElementById("mediaDetails--image")
  mediaImage.src = libraryItem.imageSource
  
  const mediaTitle = document.getElementById("mediaDetails--title")
  const mediaYear = document.getElementById("mediaDetails--year")
  const mediaMaker= document.getElementById("mediaDetails--maker")

  mediaTitle.innerText = libraryItem.title;
  mediaYear.innerText = libraryItem.year;
  mediaMaker.innerText = libraryItem.maker;

  if (document.getElementById("addMediaBtn")) {
    document.getElementById("addMediaBtn").remove()
  }
  const addMediaBtn = document.createElement("button");
  addMediaBtn.setAttribute("id", "addMediaBtn")
  addMediaBtn.innerText = "Add"

  container.appendChild(addMediaBtn)

  addMediaBtn.addEventListener('click', () => {
    console.log("render", libraryItem)
    addToLibrary(libraryItem);
    renderLibrary();
    closeSearchWindow();

  })

}

function addButtons(){

  const buttonTypes = ["Book", "Movie", "Game"];

  buttonTypes.map((type)=>{
    const button = document.createElement("button");
    button.setAttribute("id", `add${type}`);
    button.textContent = `Add ${type}`;
    button.classList.add("addButton");
    const container = document.getElementById("container--buttons");
    container.appendChild(button);

    function hideAllSearch(){
      const search = document.getElementById("search");
      [...search.children].forEach(element => {
        element.classList.add("hidden")
      });
    };

    button.addEventListener("click", () => {
      hideAllSearch();
      showSearchInput(type);
    })
  })
}

function renderSearchResults (items){
  let idCount = 0;
  
  function removeOldResults(){
    const autoComplete = document.getElementById("searchAutoComplete");
    autoComplete.innerHTML = "";
   }

   removeOldResults()
   const autoComplete = document.getElementById("searchAutoComplete");

  items.map((item) => {
    
    const searchResult = document.createElement("div")
    searchResult.setAttribute("id",`result${idCount}`);
    searchResult.classList.add("searchResult");
    
    searchResult.addEventListener("click", async function selectMedia(){
      const mediaObject = await createMediaObject(item)
      console.log("mediaObject", mediaObject)
      renderMediaDetails(mediaObject)
    })
    if (item.title){
      const movieId = item.id
      const shortTitle = shortenText(item.title)
      const year = shortenDate(item.release_date)
      searchResult.textContent = `${shortTitle} (${year})`
    } else if (item.slug){
        const gameId = item.id
        const shortTitle = shortenText(item.name)
        const year = shortenDate(item.released)
        searchResult.textContent = `${shortTitle} (${year})`
      } else {
      const shortTitle = shortenText(item.volumeInfo.title)
      const shortAuthor = shortenText(combineAuthors(item.volumeInfo.authors))
      searchResult.textContent = `${shortTitle} (${shortAuthor})`
    }
    autoComplete.appendChild(searchResult)
    idCount++
  })
}












function combineAuthors (array) {
  // !This leaves a comma after the 2nd author like...    Dude, Guy,
  if (array){  
  if (array[1]){
    let authors = ""
    array.map((author) => {
    authors = authors + `${author}, `;
  })
  return authors
  } else {
    return array[0]
  }}
}


function shortenText (string){
  if (string){
    if (string.length >= 40 ){
      const shortString = string.slice(0,40) + "..."
      return shortString
    } else return string;
  }
}
// fiveItems.map((book)=> {
//   book.volumeInfo})

function shortenDate (date){
  const shortDate = date.slice(0,4)
  return shortDate
}







function cardShake(){
  const libraryItems = [...document.getElementsByClassName("libraryItem")]
  libraryItems.map(item => {
    item.style.animation = "shake 1s";
      }
    )
    setTimeout (resetShake,1000)
    } 

// resets the shaking cards. 
function resetShake(){
  const libraryItems = [...document.getElementsByClassName("libraryItem")]
  libraryItems.map(card => {
      console.log(card.style.animation)
      card.style.removeProperty('animation')
        }
      )
    }

    const editBtn = document.getElementById("headerEditBtn")
    editBtn.addEventListener("click", editPress)

function editPress (){
  // returnScreen()
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
   console.log(selection)
   removeMedia(selection)
}

function hideTrashBtn(){
  const allDel = Array.from(document.getElementsByClassName("delCard"));
  allDel.map(card => {
    card.classList.add("hidden")
    } )
    resetShake()
}


// function showTrashBtn(){
//   const allDel = Array.from(document.getElementsByClassName("delCard"));
//   allDel.map(card => {
//     card.classList.remove("hidden")
//     } )
// }

function makeDelButton (){
  const delCard = document.createElement("div")
  delCard.classList.add("delCard");
  delCard.classList.add("hidden");

  const delButton = document.createElement("button")
  delButton.classList.add("delButton")
  delButton.textContent = "Delete!!!";
  delButton.addEventListener('click', trashButton)
  
  delCard.appendChild(delButton);

  return delCard
  
}












export {renderMediaDetails, renderSearchResults, addButtons, makeDelButton}












































































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








function resetCards(){
  const library = document.getElementsByClassName("libraryContainer")[0];
    library.innerHTML = "";

}




function clickAway (evt){
  const selection = evt.target;
  console.log(selection)
}

window.addEventListener('click', clickAway) 
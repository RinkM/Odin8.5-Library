
import createMediaObject from "./createMediaObject"
import {addToLibrary, filterLibrary, removeMedia} from "./library"

function clearInputValues (){
const inputs = [...document.getElementsByClassName("searchInput")]
inputs.map(input =>{input.value = ""})
}

const addMediaBtn = document.getElementById("headerAddBtn")
addMediaBtn.addEventListener("click", () => {
  hideAllSearchInputs();
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
  searchContainer.classList.remove("flex");
  searchContainer.classList.add("hidden");
}



function renderMediaDetails (libraryItem) {
  const checkBox = document.getElementById("consumedCheckbox")
  checkBox.classList.remove("hidden")
  
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
  addMediaBtn.setAttribute("class", "headerBtn")
  addMediaBtn.innerText = "Add"

  container.appendChild(addMediaBtn)

  function getCheckValue (){
    const checkboxDetails = document.getElementById("checkboxDetails")
    console.log(checkboxDetails)
    return checkboxDetails.checked
  }

  addMediaBtn.addEventListener('click', () => {
    libraryItem.consumedStatus = getCheckValue()
    addToLibrary(libraryItem);
    filterLibrary();
    closeSearchWindow();
  })

}

function hideAllSearchInputs(){
  const search = document.getElementById("search");
  [...search.children].forEach(element => {
    element.classList.add("hidden")
  });
};

function addButtons(){

  const buttonTypes = ["Book", "Movie", "Game"];

  buttonTypes.map((type)=>{
    const button = document.createElement("button");
    button.setAttribute("id", `add${type}`);
    button.textContent = `Search ${type}s`;
    button.classList.add("headerBtn");

    
    const container = document.getElementById("container--buttons");
    container.appendChild(button);

    button.addEventListener("click", () => {
      hideAllSearchInputs();
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
  console.log("items", items)
  
  items.map((item) => {
    
    const searchResult = document.createElement("div")
    searchResult.setAttribute("id",`result${idCount}`);
    searchResult.classList.add("searchResult");
    
    searchResult.addEventListener("click", async function selectMedia(){
      const mediaObject = await createMediaObject(item);

      
      renderMediaDetails(mediaObject);
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
      } else if (item.guid) {
        console.log("fromRenderSearch",item)
        const gameId = item.guid
        const shortTitle = shortenText(item.name)
        if (item.original_release_date){
          const year = shortenDate(item.original_release_date)
          searchResult.textContent = `${shortTitle} (${year})`
        } else {searchResult.textContent = `${shortTitle}`}
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

      card.style.removeProperty('animation')
        }
      )
    }

    const editBtn = document.getElementById("headerEditBtn")
    editBtn.addEventListener("click", editPress)

function editPress (){
  const delDiv = document.getElementsByClassName("delCard")
  const allDel = Array.from(delDiv);
  const delClasses = allDel[0].classList;
  allDel.map(card => {
    card.classList.toggle("hidden")
    }
  )
  if (Array.from(delClasses).indexOf('hidden') == true){
    resetShake()
    
  } else {
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


function makeDelButton (){
  const delCard = document.createElement("div")
  delCard.classList.add("delCard");
  delCard.classList.add("hidden");

  const delButton = document.createElement("button")
  delButton.classList.add("headerBtn")
  delButton.textContent = "REMOVE";
  delButton.addEventListener('click', trashButton)
  
  delCard.appendChild(delButton);

  return delCard
  
}






export {
  renderMediaDetails, 
  renderSearchResults, 
  addButtons, 
  makeDelButton
}


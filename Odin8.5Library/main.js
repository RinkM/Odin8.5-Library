import './style.css'
import bookSearch from './public/src/bookApi';
import {movieSearch, getMovieDetails, getMoviePoster} from './public/src/movieApi';
import mediaDetails from './public/src/domScript';



const movieInput = document.getElementById("searchInput--movie");
const bookInput = document.getElementById("searchInput--book");

bookInput.addEventListener("keyup", () => bookButton())
movieInput.addEventListener("keyup", () => movieButton())


async function bookButton() {
  const searchInput = document.getElementById("searchInput--book");
  const searchValue = getSearchValue(searchInput);
  const bookResults =  await bookSearch(searchValue);
  console.log(bookResults)
  renderSearchResults(bookResults)
} 

async function movieButton(){
  const searchInput = document.getElementById("searchInput--movie");
  const searchValue = getSearchValue(searchInput);
  const movieResults =  await movieSearch(searchValue);
  renderSearchResults(movieResults)
  console.log(movieResults)
}

function getSearchValue (input){
  return input.value
}



// ! can I sleect books by ISBN?
//  titles need to be character limited.   add authors too?   40/20?
function renderSearchResults (items){
  let idCount = 0;
  
  // function removeOldResults(){
    const autoComplete = document.getElementById("searchAutoComplete");
    autoComplete.innerHTML = "";
  // }
  
  // removeOldResults()

  items.map((item) => {
    
    const searchResult = document.createElement("div")
    searchResult.setAttribute("id",`result${idCount}`);
    searchResult.classList.add("searchResult");
    
    searchResult.addEventListener("click", async function selectMedia(){
      console.log(item)
      const mediaObject = await createMedia(item)
      console.log(mediaObject)
      mediaDetails(mediaObject)


      // let details = await getMovieDetails(item.id)
      // console.log(details)
      // mediaObject();
      // mediaDetails();

    })

    if (item.title){


      const movieId = item.id
      const shortTitle = shortenText(item.title)
      const year = shortenDate(item.release_date)

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



async function createMedia (item) {
  const currentTime = Date.now()
  let libraryItem = {}
  // volumeInfo is from GoogleBooksApi.
  if (item.volumeInfo){
    libraryItem.id = currentTime, 
    libraryItem.mediaData = "book",
    libraryItem.title = item.volumeInfo.title;
    libraryItem.maker = item.volumeInfo.authors;
    libraryItem.year = item.volumeInfo.publishedDate;
    libraryItem.imageSource = item.volumeInfo.imageLinks.thumbnail;
    libraryItem.consumedStatus = false;
    libraryItem.review = 2;
  } else if (item.title){
    let details = await getMovieDetails(item.id)
    console.log(details)
    libraryItem.id = currentTime, 
    libraryItem.mediaData = "movie",
    libraryItem.title = item.title;
    libraryItem.maker = "";
    libraryItem.year = item.release_date;
    libraryItem.imageSource = getMoviePoster(item.poster_path);
    libraryItem.consumedStatus = false;
    libraryItem.review = 2;
  }
  return libraryItem
}
import './style.css'
import bookSearch from './public/src/bookApi';
import movieSearch from './public/src/movieApi';


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
const movieInput = document.getElementById("searchInput--movie");
const bookInput = document.getElementById("searchInput--book");

bookInput.addEventListener("keyup", () => bookButton())
movieInput.addEventListener("keyup", () => movieButton())


// ! can I sleect books by ISBN?
//  titles need to be character limited.   add authors too?   40/20?
function renderSearchResults (items){
  let idCount = 0;
  
  function removeOldResults(){
    const autoComplete = document.getElementById("searchAutoComplete");
    autoComplete.innerHTML = "";
  }
  
  removeOldResults()

  items.map((item) => {
    
    const searchResult = document.createElement("div")
    searchResult.setAttribute("id",`result${idCount}`);
    searchResult.classList.add("searchResult");

    if (item.title){
      const movieId = item.id

      const shortTitle = shortenText(item.title)
      const year = shortenDate(item.release_date)
      console.log("movie", item)

      searchResult.textContent = `${shortTitle} (${year})`
    } else {
      console.log("book", item.volumeInfo)
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



function addItem (mediaType, itemId, title, author, year, finished, review, notes)
{

  let libraryItem = {
    name: mediaData
  }


//   {
//     this.mediaType = mediaType;
//     this.itemId = itemId;
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.finished = finished;
//     this.review = review;
//     this.notes = notes;
// }

// info(){
//     const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
//     return bookInfo
// }
}


}
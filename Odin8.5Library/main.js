import './style.css'
import {bookSearch, gameSearch, movieSearch, gameSearch2} from './src/apiScript';
// import {movieSearch} from './src/movieApi';
import {renderSearchResults, addButtons} from './src/domScript';
import {filterLibrary} from './src/library';


function myFunction () {
  $.ajax({
      url: testUrl,
      type: "GET",
      dataType: "jsonp",
      crossDomain:true,
      jsonp:"json_callback",
      success: function(result){
      console.log(result)
  },
  
  error: function(result){
  console.log("Error");
  },
  })
  ;
}


filterLibrary()
addButtons()
const movieInput = document.getElementById("searchInput--movie");
const bookInput = document.getElementById("searchInput--book");
const gameInput = document.getElementById("searchInput--game");

bookInput.addEventListener("keyup", () => bookButton())
movieInput.addEventListener("keyup", () => movieButton())
gameInput.addEventListener("keyup", () => gameButton())


async function bookButton() {
  const searchInput = document.getElementById("searchInput--book");
  const searchValue = getSearchValue(searchInput);
  const bookResults =  await bookSearch(searchValue);
  console.log(bookResults)
  renderSearchResults(bookResults)
} 

async function gameButton(){
  const searchInput = document.getElementById("searchInput--game");
  const searchValue = getSearchValue(searchInput);
  const gameResults =  gameSearch2(searchValue);
  // gameResults.success(data => console.log(data))
  console.log(gameResults)
  console.log(gameResults.promise())

  renderSearchResults(gameResults)

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





import './style.css'
import {bookSearch, gameSearch} from './src/bookApi';
import {movieSearch} from './src/movieApi';
import {renderSearchResults, addButtons} from './src/domScript';
import {renderLibrary} from './src/library';

renderLibrary()
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
  const gameResults =  await gameSearch(searchValue);
  console.log(gameResults)
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

import {bookSearch, movieSearch, gameSearch2} from './src/apiScript';
import {renderSearchResults, addButtons} from './src/domScript';
import {filterLibrary} from './src/library';
import './style.css'
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


// takes the full promise and simplifies it into an array of game items.
// let games = results.results.filter(item =>{item.api_detail_url.startsWith("https://www.giantbomb.com/api/game")});
// sends 5 items through rendersearch results. 
async function gameButton(){
  const searchInput = document.getElementById("searchInput--game");
  const searchValue = getSearchValue(searchInput);
  gameSearch2(searchValue).then(
    (results) => {
      let games = results.results.filter((item) => item.resource_type == "game")
      renderSearchResults(games.slice(0,5));
    },
    (reason) =>{
      console.error(reason)
    },
  );


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





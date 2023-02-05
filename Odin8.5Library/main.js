import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import bookSearch from './public/src/apiScript';
import movieSearch from './public/src/movieApi';




// document.querySelector('#app').innerHTML = `Hello`

// setupCounter(document.querySelector('#counter'))
function bookButton() {
  const searchValue = getSearchValue();
  const bookResults =  bookSearch(searchValue);
  console.log(bookResults)

} 

const bookBtn = document.getElementById("searchBookButton");
const movieBtn = document.getElementById("searchMovieButton");
const searchResults = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => bookButton())
function getSearchValue (){
  const searchInput = document.getElementById("searchInput");
  return searchInput.value

}



bookBtn.addEventListener("click", () => bookButton()  )
movieBtn.addEventListener("click",  function movieButton(){
  const searchValue = getSearchValue();
  const movieResults =  movieSearch(searchValue);
  console.log(movieResults)



}
)


const movieApi = "38e8b2e2ac2be3f92ce69d44aef52eef";

async function movieSearch (searchTerm){
  
  const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${movieApi}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const response = await fetch(searchAPI);
  const info = await response.json();
  // console.log(info.results)
  const fiveMovieItems = info.results.slice(0, 5)
  console.log(fiveMovieItems)
  // fiveMovieItems.map((movie)=>{
  //   console.log (movie.title, movie.id)
  // })

  return fiveMovieItems
} 




async function getMovieDetails (movieId){
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieApi}`
  let response = await fetch(url)
  let info = await response.json()
  return info
} 

function getMoviePoster (path){
  const urlStart = "http://image.tmdb.org/t/p/";
  const size = "/w154";
  const posterPath = "/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg";
  const posterUrl = `${urlStart}${size}${path}`
  return posterUrl
}


async function movieConfiguration (){
  let configURL = `https://api.themoviedb.org/3/configuration?api_key=${movieApi}`
  let response = await fetch(configURL)
  let info = await response.json()
  return info
  } 


export {movieSearch, getMovieDetails, getMoviePoster};
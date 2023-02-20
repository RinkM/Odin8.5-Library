import { renderSearchResults } from "./domScript";
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




async function movieConfiguration (){
  let configURL = `https://api.themoviedb.org/3/configuration?api_key=${movieApi}`
  let response = await fetch(configURL)
  let info = await response.json()
  return info
  } 


export {};



 async function bookSearch (searchTerm){
  const bookApi = "AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${bookApi}`
  const response = await fetch(bookUrl);
  const info = await response.json();
  const fiveBookItems = info.items.slice(0,5)
  return fiveBookItems
}


async function gameSearch (searchTerm){
  const gameApi = "64c2aeeb46ed47e2a2ce4c9f002e020f"
  const url = `https://api.rawg.io/api/games?key=${gameApi}&search=${searchTerm}`
  const response = await fetch(url);
  const info = await response.json();
  const fiveGameItems = info.results.slice(0,5)
  console.log(fiveGameItems)
  return fiveGameItems
}

function fiveGameItems (results){
  // 
  results.map(game => {console.log(game.name)})


  return results
}

function gameSearch2 (searchTerm){
    const giantBombApi = "8e5e059328164c0cc70ef6f32294a61fcf58fa1c";
    const giantBombSearchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}&limit=5&format=jsonp&json_callback=json_callback`;
    return $.ajax({
      url: giantBombSearchUrl,
      type: "GET",
      dataType: "jsonp",
      crossDomain:true,
      jsonp:"json_callback",
      
      success: function(results){
        fiveGameItems(results.results)
        renderSearchResults(results.results)

        
        // console.log("searchResults for ",searchTerm, results.results);
          // results.results.map(item => console.log(item.image_tags))
          // results.results = returns 5 items.    it should just return them so I can use the info...
          // console.log(getGameArtFilterUrl(results.results[0])) 
     },
      error: function(result){
        console.log("SearchGiantBomb Error", result);
     },
    });
  
  }
  



export { 
  bookSearch, 
  gameSearch, 
  movieSearch, 
  getMovieDetails,
  gameSearch2, 
}
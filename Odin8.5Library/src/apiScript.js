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
  let fiveItems = [] 
  results.map(game => {fiveItems.push(game)})
  console.log(fiveItems)
  return fiveItems
}

function gameSearch2 (searchTerm){
    const giantBombApi = "8e5e059328164c0cc70ef6f32294a61fcf58fa1c";
    const giantBombSearchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}&limit=20&format=jsonp&json_callback=json_callback`;
    return Promise.resolve($.ajax({
      url: giantBombSearchUrl,
      type: "GET",
      dataType: "jsonp",
      crossDomain:true,
      jsonp:"json_callback",
      
      success: function(results){
        // // takes the full promise and simplifies it into an array of game items.
        // let games = results.results.filter(item =>{item.api_detail_url.startsWith("https://www.giantbomb.com/api/game")});
        // // sends 5 items through rendersearch results. 
        // renderSearchResults(games.slice[0,5]);
        // // ?renderSearchResults(results.results)
     },
      error: function(result){
        console.log("SearchGiantBomb Error", result);
     },
    }));
  
  }
  

  
  function getBoxArt(url){
    // const giantBombSearchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}&limit=5&format=jsonp&json_callback=json_callback`;
    return Promise.resolve($.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      crossDomain:true,
      jsonp:"json_callback",
      success: function(results){
        console.log("getBoxArt for", results.results[0].medium_url);
          // results.results.map(item => console.log(item.image_tags))
        return results.results
     },
      error: function(result){
        console.log("getBoxArt Error", result);
     },
    }));
  }
  
function boxArtUrlMaybe (){
  getBoxArt().then(
    (results) => {
      console.log(results)
      
      
      
      let games = results.results.filter((item) => item.resource_type == "game")
      renderSearchResults(games.slice(0,5));
    },
    (reason) =>{
      console.error(reason)
    },
  );


}
  



export { 
  bookSearch, 
  gameSearch, 
  movieSearch, 
  getMovieDetails,
  gameSearch2, 
  getBoxArt
}
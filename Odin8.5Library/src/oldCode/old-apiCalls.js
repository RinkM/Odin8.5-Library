async function movieSearch (searchTerm){
  const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${movieApi}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const response = await fetch(searchAPI);
  const info = await response.json();
  return info
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
  const posterUrl = `${urlStart}${size}${posterPath}`
  return posterUrl
}


async function movieConfiguration (){
  let configURL = `https://api.themoviedb.org/3/configuration?api_key=${movieApi}`
  let response = await fetch(configURL)
  let info = await response.json()
  return info
  } 

  const movieApi = "38e8b2e2ac2be3f92ce69d44aef52eef";
  const movieSearchTerm = "Back to the Future";
  const movieSearchResults = await movieSearch(movieSearchTerm)
  const movieDetails = await getMovieDetails(105)
  const movieConfig = await movieConfiguration()


  
  // need to clean search terms to fit the URL -> remove spaces, punctuation etc...
  
  
  
  
  
  


// button press flowChart: click->grab searchInput.value-> use value, build url->
//  fetch url -> return array of titles + authors (covers? (probably))
// ->these titles are clickable.  highlightable. hoverable. 
// -> user clicks on an option (id contains dateTime?), 
// -> confirm with more data title, year, cover, author publisher etc
//? -> does the movie / book data return an array WITH all data of each book?
//  -> that option is added to the library
// -> cards are redrawn.   or are the added?  can I do that yet?
//? -> maybe
// // 

// function getSearchValue (){
//   const searchInput = document.getElementById("searchInput");
//   return searchInput.value

// }

// bookBtn.addEventListener("click", function bookSearch() {
//   const searchValue = getSearchValue();
//   const bookResults = bookSearch(searchValue);
//   console.log(bookResults)

// } )
// movieBtn.addEventListener("click", function movieSearch(){

// }
// )

















  // Everything seems to work except the CORS Thing.  I need to... fake it ?  There's a how to on the site

// const clientSecret  = "13hjggts4yi07iy4lhwkg3gfnwld6x"
const clientId = "nixw3v1vce8o5hv7zdfa2r1bukau8s"

// https://apicalypse.io/implementation/

// const shortUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`

const fullGameUrl = "https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials"

const tokenURL = "https://api.igdb.com/v4/games"

let header = {
  ClientID : "nixw3v1vce8o5hv7zdfa2r1bukau8s",
  // Authorization: `Bearer ${token}`
}

async function getGameToken (){
  const response = await fetch(fullGameUrl,{
      method: "POST"
      })
  const info = await response.json();
  return info.access_token
  }


async function getGameInfo (token){
  const response = await fetch(tokenURL,{
      method:"GET",
      mode:"no-cors",
      Header:{
          "Client-ID": "nixw3v1vce8o5hv7zdfa2r1bukau8s",
          Authorization: `Bearer pimzgqfkjtwwrih6yiycam9vkxorah`,
      },
      Body: "fields *; where id = 1942;"
      
      })
  const info = await response.json();
  return info
  }


let token = await getGameToken()

// let gameInfo = await getGameInfo(token)









const clientSecret  = "13hjggts4yi07iy4lhwkg3gfnwld6x"
const clientId = "nixw3v1vce8o5hv7zdfa2r1bukau8s"

// https://apicalypse.io/implementation/


const shortUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`

const fullGameUrl = "https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials"

const tokenURL = "https://api.twitch.tv/helix/users?login=twitchdev"

let header = {
  ClientID : "nixw3v1vce8o5hv7zdfa2r1bukau8s",
  // Authorization: `Bearer ${token}`
}

async function getGameToken (){
  const response = await fetch(fullGameUrl,{
      method: "POST"
      })
  const info = await response.json();
  return info.access_token
  }

  const fortUrl = "https://api.twitch.tv/helix/search/categories?query=fort"

  async function getGameInfo (token){
    console.log(token)
    const response = await fetch(fortUrl,{
      method:"GET",
      mode:"no-cors",
      headers:{
          "Client-Id": "nixw3v1vce8o5hv7zdfa2r1bukau8s",
          Authorization: `Bearer ${token}`
      }
    })
  const info = await response.json();
  return info
  }



let token = await getGameToken()

let info = await getGameInfo(token)

// let gameInfo = await getGameInfo(token)






var client_id = 'hozgh446gdilj5knsrsxxz8tahr3koz';
var redirect = 'https://barrycarlyon.github.io/twitch_misc/authentication/implicit_auth/';

      
document.getElementById('authorize_public').setAttribute('href',
 'https://id.twitch.tv/oauth2/authorize?client_id=' + 
 client_id + '&redirect_uri=' + encodeURIComponent(redirect) + 
 '&response_type=token');

 
document.getElementById('authorize_email').setAttribute('href',
 'https://id.twitch.tv/oauth2/authorize?client_id=' + 
 client_id + '&redirect_uri=' + encodeURIComponent(redirect) + 
 '&response_type=token&scope=user:read:email');

const key = "AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"

const searchTerm = "hobbit"
// need to clean search terms to fit the URL -> remove spaces, punctuation etc...




// url = "https://www.googleapis.com/books/v1/volumes?q=hobbit&key=AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"

// async function bookAccess (){
//     const response = await fetch(url)
//     const info = await response.json();
//     info.items.map((book)=> {
//       console.log(book.volumeInfo)
//     })
//     return info
// }


// bookAccess()
 





// url = "https://www.googleapis.com/books/v1/volumes?q=hobbit&key=AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"

// async function bookAccess (){
//     const response = await fetch(url)
//     const info = await response.json();
//     info.items.map((book)=> {
//       console.log(book.volumeInfo.title, book.volumeInfo.authors[0])
//         console.log(book)

//     })
//     return info
// }


// // bookAccess()



// // client_id=Client ID

// // client_secret=Client Secret

// // grant_type=client_credentials

// const clientSecret  = "13hjggts4yi07iy4lhwkg3gfnwld6x"
// const clientId = "nixw3v1vce8o5hv7zdfa2r1bukau8s"

// const gameUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`

// const fullGameUrl = "https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials"


// async function getGameToken (){
//     const response = await fetch(fullGameUrl,{
//         method:"POST"
//         })
//     const info = await response.json();
//     const token = info.access_token
//     return token
//     }



// let token = getGameToken()

// const tokenURL = "https://api.igdb.com/v4/games"

// const gameToken = "qpuws82o4xpy26hfjcho63juw44k2e"

// async function gameAccess (){
//     const response = await fetch(fullGameUrl,{
//         method:"POST",
//         ClientID: "nixw3v1vce8o5hv7zdfa2r1bukau8s",
//         Authorization: "Bearer qpuws82o4xpy26hfjcho63juw44k2e",
//         Body: "fields *;"
        
//         })
//     const info = await response.json();
//     console.log(info.access_token)
//     return info
//     }

// gameAccess()
















https://apicalypse.io/implementation/





const fullGameUrl = "https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials"

const tokenURL = "https://api.igdb.com/v4/games"

async function getGameToken (){
    const response = await fetch(fullGameUrl,{
        method:"POST"
        })
    const info = await response.json();
    const token = info.access_token
    return token
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

let gameInfo = await getGameInfo(token)



















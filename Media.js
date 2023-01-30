

class Media {
    constructor(mediaType, itemId, title, author, year, finished, review, notes){
        this.mediaType = mediaType;
        this.itemId = itemId;
        this.title = title;
        this.author = author;
        this.year = year;
        this.finished = finished;
        this.review = review;
        this.notes = notes;
    }

    info(){
        const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
        return bookInfo
    }
}


function Media2 (mediaType, itemId, title, author, year, finished, review, notes){
    this.mediaType = mediaType;
    this.itemId = itemId;
    this.title = title;
    this.author = author;
    this.year = year;
    this.finished = finished;
    this.review = review;
    this.notes = notes;
    this.info = function() {
        const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
        return bookInfo
    }
  }

  let clientId = "nixw3v1vce8o5hv7zdfa2r1bukau8s"
let myHeaders = new Headers({
    "Client-ID": clientId,
    Authorization: `Bearer ${access_token}`
})


// ? here I was. I can get the token, but there are issues with the search. oncaught errors.
// good luck!


  async function getToken(){
    let url = "https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials"
    const response = await fetch(url,{
        method:"POST"});
    const token = await response.json()
    console.log(token)
    let myHeaders = new Headers({
        "Client-ID": clientId,
        Authorization: `Bearer ${token.access_token}`
    })
    console.log(myHeaders)
     return myHeaders
  }

  async function getGameInfo(myHeaders){
    let url = "https://api.igdb.com/v4/games"
    
  const response = await fetch(url,{
    method:"POST",
    headers: myHeaders,
    body: "fields *; where id = 1942;"});
    const token = await response.json();
    console.log(token)
  }


  function accessAPI(){
    getGameInfo(getToken())
  }

  accessAPI()

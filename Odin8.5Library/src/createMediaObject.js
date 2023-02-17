import { getMovieDetails } from "./apiScript"


function getMoviePoster (path){
  const urlStart = "http://image.tmdb.org/t/p/";
  const size = "/w154";
  const posterUrl = `${urlStart}${size}${path}`
  return posterUrl
}

async function createMediaObject (item) {
  
  if (item.volumeInfo){
    return await createBookObject(item)
  } else if (item.title){
    return await createMovieObject(item) 
  } else if (item.slug){
    return await createGameObject(item)
  } else {
    console.log("error createMedia function")
  }
}

async function createMovieObject(item){
  let details = await getMovieDetails(item.id)
  let libraryItem = {
    id : Date.now(), 
    mediaData : "movie",
    title : item.title,
    maker : "",
    year : item.release_date,
    imageSource : getMoviePoster(item.poster_path),
    consumedStatus : false,
    review : 2
  }
  console.log(details)

  return libraryItem
}

async function createBookObject(item){
  let libraryItem = {
    id : Date.now(), 
    mediaData : "book",
    title : item.volumeInfo.title,
    maker : item.volumeInfo.authors,
    year : item.volumeInfo.publishedDate,
    imageSource : item.volumeInfo.imageLinks.thumbnail,
    consumedStatus : false,
    review : 2
  }
  return libraryItem
}

async function createGameObject(item){
  let details = await getMovieDetails(item.id)
    console.log(details)
    const libraryItem = {
    id : Date.now(), 
    mediaData : "game",
    title : item.name,
    maker : "",
    year : item.released,
    imageSource : item.short_screenshots[1].image,
    consumedStatus : false,
    review : 2
  }
    return libraryItem
  }



export default createMediaObject






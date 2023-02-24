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
  } else if (item.guid){
    return await createGameObjectBomb(item)
  }else {
    console.log("error createMedia function")
  }
}

async function createMovieObject(item){
  let details = await getMovieDetails(item.id)
  let libraryItem = {
    id : Date.now(), 
    mediaType : "movie",
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
    mediaType : "book",
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
  // !removed this :

  // let details = await getMovieDetails(item.id)

    const libraryItem = {
    id : Date.now(), 
    mediaType : "game",
    title : item.name,
    maker : "",
    year : item.released,
    imageSource : item.short_screenshots[1].image,
    consumedStatus : false,
    review : 2
  }
    return libraryItem
  }



  async function createGameObjectBomb(item){
    // console.log("onclick", item)
    // const boxArtUrl = getGameArtFilterUrl(item)
    // console.log(boxArtUrl)
    // let imageUrl = getBoxArt(boxArtUrl)


    let imageUrl = item.image.medium_url

    // let details = await getMovieDetails(item.id)
      const libraryItem = {
      id : Date.now(), 
      mediaType : "game",
      title : item.name,
      maker : "",
      year : item.original_release_date,
      imageSource : imageUrl,
      consumedStatus : false,
      review : 2
    }
      return libraryItem
    }
  


  function getGameArtFilterUrl(gameObject){
    const boxArtObject = gameObject.image_tags.filter(item => item.name == "Box Art");
    console.log("filtered boxartObject",boxArtObject[0])
      if (!boxArtObject[0]) {
        // This will return the other filters. should prbably filter by all images. Will get to that...
          console.log("no box-art", gameObject.image_tags)
          const imgFilterUrl = gameObject.image_tags[0].api_detail_url
          return buildBoxArtUrlFilter(imgFilterUrl)
    }
      else{
        //retrns the url filter for boxart.   
          console.log("this is box artURL", boxArtObject[0].api_detail_url)
          const boxArtUrl = boxArtObject[0].api_detail_url
      return buildBoxArtUrlFilter(boxArtUrl)
      }
  }


async function buildBoxArtUrlFilter (url){
  // https://www.giantbomb.com/api/images/3030-4725/?filter=image_tag:Box%20Art

  const urlFormat = "format=jsonp&json_callback=json_callback"
  const api = "api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c"
  const newUrl = `${url}&${api}&${urlFormat}`
  console.log(newUrl)
    return newUrl
}



export default createMediaObject






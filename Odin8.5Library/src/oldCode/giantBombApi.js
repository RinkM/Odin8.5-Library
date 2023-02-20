const giantBombApi = "8e5e059328164c0cc70ef6f32294a61fcf58fa1c";

const searchTerm = "metroid 3";
const searchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}`;

const metroidUrl = `https://www.giantbomb.com/api/game/3030-4725/?api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c&format=jsonp&json_callback=json_callback`;


const giantBombUrl = `https://www.giantbomb.com/api/game/[guid]/?api_key=${giantBombApi}`;



const testUrlNoCallBack = `https://www.giantbomb.com/api/game/3030-4725/?api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c&format=jsonp`;

// const api = "http://www.giantbomb.com/api/reviews/?api_key=[TokenKey]&format=json&limit=3&sort=publish_date:desc";
const boxArtFilterUrl = "https://www.giantbomb.com/api/images/3030-4725/?api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c&filter=image_tag:Box%20Art&format=jsonp&json_callback=json_callback"

let data;
let boxData;
let resultData;





// search API for a game. returns 5 games. Display their titles and year. User selects the one and it creates an object.
// object needs title, year, .... also needs art image.
// on select, it uses the image url list and filters by box-art (or top?) gets a URL

// tack on information to the URL and do another ajax connect.  
// getGameArtFilterUrl adds this info.  returns a URL.

//  New function uses this filteURL to get all box-art images. 
// Should pull out the and it filters the images by 'box-art' 

//   get title and other info.  get box-art filter url
// clean up the box-art filter url.   access the url and get the box art of game.  temportrily show all images. 
// 
// 

function searchGiantBomb(searchTerm){
  const giantBombSearchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}&limit=5&format=jsonp&json_callback=json_callback`;
  $.ajax({
    url: giantBombSearchUrl,
    type: "GET",
    dataType: "jsonp",
    crossDomain:true,
    jsonp:"json_callback",
    success: function(results){
      // console.log("searchResults for ",searchTerm, results.results);
        // results.results.map(item => console.log(item.image_tags))
        // results.results = returns 5 items.    it should just return them so I can use the info...
        console.log(getGameArtFilterUrl(results.results[0]))
      return results.results


   },
    error: function(result){
      console.log("SearchGiantBomb Error", result);
   },
  });

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


function getBoxArt(url){
  // const giantBombSearchUrl = `https://www.giantbomb.com/api/search/?api_key=${giantBombApi}&query=${searchTerm}&limit=5&format=jsonp&json_callback=json_callback`;
  $.ajax({
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
  });

}


function myFunction () {
  $.ajax({
    url: boxArtFilterUrl,
    type: "GET",
    dataType: "jsonp",
    crossDomain:true,
    jsonp:"json_callback",
    success: function(result){
        console.log("myFunction- result", result)
        resultData = result;
        // let boxUrl = boxArtUrl(result);
        // ajaxBoxArt(boxUrl);
        
    console.log(result)
        data = result
        return result
},

error: function(result){
console.log("Error");
},
});
}




function ajaxBoxArt (boxUrl){
    console.log("boxURL", boxUrl)
    $.ajax({
    url: boxUrl,
    type: "GET",
    dataType: "jsonp",
    crossDomain:true,
    jsonp:"json_callback",
    success: function(result){
    console.log(result)
        boxData = result
        return result
},

error: function(result){
    console.error("Error - ajaxBoxArt ");
    console.log(result)
},
});
}


async function buildBoxArtUrlFilter (url){
  // https://www.giantbomb.com/api/images/3030-4725/?filter=image_tag:Box%20Art

  const urlFormat = "format=jsonp&json_callback=json_callback"
  const api = "api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c"
  const newUrl = `${url}&${api}&${urlFormat}`
  console.log(newUrl)
    return newUrl
}


const metroidBoxArt = "https://www.giantbomb.com/api/images/3030-4725/?filter=image_tag:Box%20Art&api_key=8e5e059328164c0cc70ef6f32294a61fcf58fa1c&format=jsonp&json_callback=json_callback";
const box = getBoxArt(metroidBoxArt);

const metroidTest = searchGiantBomb("metroid 3");

const boxMetroid  = ajaxBoxArt();



// async function search (){
//   const response = await fetch(testUrlNoCallBack,{
//       mode:"no-cors"
//       });
//   const info = await response.json();
//   console.log(info)
//   return info
//   }

// // const results = await search()

import { makeDelButton } from "./domScript";


function addToLibrary (media){
  library.push(media);
  console.log(library);
  return library
}
function removeMedia (divId) {
  const id = divId.split("item")[1]
  const index = library.findIndex(media=> {
    return media.id == id
  })
  library.splice(index,1)
  filterLibrary()
}


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}



function createCheckBox(item){

  const inputSettings = {
  "type" : "checkbox",
  "id" : `checkBox${item.id}`,
  "class" : "checkBox",
  "name" : `checkBox${item.id}`,
  }
  const labelSettings = {
    "for" : `checkBox${item.id}`,
    "class" : "checkBoxLabel"
  }
  
  
  const containerCheckBox = document.createElement("div");
  const labelCheckBox = document.createElement("label");
  const checkBox = document.createElement("input");

  containerCheckBox.setAttribute("id", `checkBoxDiv${item.id}`);
  containerCheckBox.setAttribute("class", "checkBoxDiv");
  labelCheckBox.innerText = "Finished"

  
  setAttributes(labelCheckBox, labelSettings)
  setAttributes(checkBox, inputSettings)
  containerCheckBox.appendChild(labelCheckBox);
  containerCheckBox.appendChild(checkBox)
  checkBox.checked = item.consumedStatus
  checkBox.addEventListener("input", ()=> finished(checkBox, item))

  

  return containerCheckBox


}



function finished (checkbox, item){
  console.log(checkbox.checked)
  console.log(item)
  // const id = divId.split("checkBox")[1]
  const index = library.findIndex(media=> {
    return media.id == item.id
  })
  library[index].consumedStatus = checkbox.checked
  console.log(library)
}



function filterLibrary (){
  console.log(library)
  const buttonTypes = ["Book", "Movie", "Game"];

  const filteredBooks = library.filter(item => item.mediaType == "book")
  const filteredMovies = library.filter(item => item.mediaType == "movie")
  const filteredGames = library.filter(item => item.mediaType == "game")

  const libraryBooks = document.getElementById("library--books");
  const libraryMovies = document.getElementById("library--movies");
  const libraryGames = document.getElementById("library--games");

  

  while (libraryBooks.firstChild) 
    {libraryBooks.removeChild(libraryBooks.firstChild)}

    while (libraryMovies.firstChild) 
    {libraryMovies.removeChild(libraryMovies.firstChild)}
    
    while (libraryGames.firstChild) 
    {libraryGames.removeChild(libraryGames.firstChild)}

  renderLibrary(libraryBooks, filteredBooks)
  renderLibrary(libraryMovies, filteredMovies)
  renderLibrary(libraryGames, filteredGames)
  
}






function renderLibrary(libraryContainer, library){  
  library.map((item) => {

    let finishedStatus;
    if (item.consumedStatus){
      finishedStatus = "Yes"
    }
    else {finishedStatus = "Not Yet"}
    const mediaDiv = document.createElement("div");
    mediaDiv.setAttribute("id", `item${item.id}`);
    mediaDiv.classList.add("libraryItem")

    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", `text${item.id}`);
    textContainer.classList.add("libraryItemText")
    textContainer.classList.add("hidden")

    const titleText = document.createElement("div");
    titleText.setAttribute("id", `title${item.id}`);
    titleText.classList.add("thumbText")
    titleText.textContent = `${item.title}`



    
    const checkBox = createCheckBox(item)
    

    textContainer.appendChild(titleText)
    textContainer.appendChild(checkBox)
    
    const image = document.createElement("img");
    image.src = item.imageSource;
    image.classList.add("libraryImage")
    
    mediaDiv.appendChild(textContainer)
    mediaDiv.appendChild(image)
    libraryContainer.appendChild(mediaDiv)

    mediaDiv.addEventListener("mouseenter", function mediaHover(){
      textContainer.classList.remove("hidden")
      image.classList.add("greyScale")
    })

    mediaDiv.addEventListener("mouseleave", function mediaHover(){
      textContainer.classList.add("hidden")
      image.classList.remove("greyScale")
    })

    mediaDiv.appendChild(makeDelButton())

})
}




let library = [
  {
      "id": 1676358022094,
      "mediaType": "book",
      "title": "The Night Circus",
      "maker": [
          "Erin Morgenstern"
      ],
      "year": "2011",
      "imageSource": "http://books.google.com/books/content?id=t1MDOGpyW9gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "consumedStatus": true,
      "review": 2
  },
  {
      "id": 1676358033182,
      "mediaType": "book",
      "title": "Red Rising",
      "maker": [
          "Pierce Brown"
      ],
      "year": "2014-01-28",
      "imageSource": "http://books.google.com/books/content?id=nPF9n0SwstMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358070744,
      "mediaType": "book",
      "title": "Leviathan Wakes",
      "maker": [
          "James S. A. Corey"
      ],
      "year": "2011-06-15",
      "imageSource": "http://books.google.com/books/content?id=yud-foXqGUEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358081206,
      "mediaType": "movie",
      "title": "Blade Runner",
      "maker": "",
      "year": "1982-06-25",
      "imageSource": "http://image.tmdb.org/t/p//w154/qLX91FhHWCVrxDVsw0g2UD5c3Zk.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358083500,
      "mediaType": "movie",
      "title": "Blade Runner 2049",
      "maker": "",
      "year": "2017-10-04",
      "imageSource": "http://image.tmdb.org/t/p//w154/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358115996,
      "mediaType": "movie",
      "title": "Up",
      "maker": "",
      "year": "2009-05-28",
      "imageSource": "http://image.tmdb.org/t/p//w154/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358130059,
      "mediaType": "game",
      "title": "Donkey Kong 64",
      "maker": "",
      "year": "1999-11-22",
      "imageSource": "https://media.rawg.io/media/screenshots/a67/a672a4e9b978e83779f9f57b6888c94c.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358161370,
      "mediaType": "game",
      "title": "Sonic the Hedgehog 2",
      "maker": "",
      "year": "1992-11-21",
      "imageSource": "https://media.rawg.io/media/screenshots/4ca/4ca52a75bc88b162271545064b0c811f.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676674745977,
      "mediaType": "game",
      "title": "Halo: Reach",
      "maker": "",
      "year": "2010-09-14",
      "imageSource": "https://media.rawg.io/media/screenshots/36e/36e2b35282b7a413dae48789ffbd6651.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676674782639,
      "mediaType": "movie",
      "title": "Army of Darkness",
      "maker": "",
      "year": "1992-10-31",
      "imageSource": "http://image.tmdb.org/t/p//w154/xsgTuAtR2zSH8Umg3jWZcZjlDpe.jpg",
      "consumedStatus": false,
      "review": 2
  }
]





export {
  addToLibrary, 
  renderLibrary, 
  removeMedia, 
  filterLibrary
}





// function saveLocal() {
//   localStorage.setItem('books', JSON.stringify(library))
//   localStorage.setItem('id', JSON.stringify(idCounter))
// }

// function restoreLocal() {
//   if (localStorage.getItem('books') != null) {
//     library = JSON.parse(localStorage.getItem('books'))
//     if (localStorage.getItem('id') != null) {
//       idCounter = JSON.parse(localStorage.getItem('id'))
//     } else {
//       idCounter = 0
//     }
//     display()
//   } else {
//     library = []
//     idCounter = 0
//   }
// }

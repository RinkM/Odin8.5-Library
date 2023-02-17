
import { makeDelButton } from "./domScript";


function addToLibrary (media){
  library.push(media);
  console.log(library);
  return library
}
const removeMedia = (divId)=> {
  console.log(divId)
  const id = divId.split("item")[1]
  const index = library.findIndex(media=> {
    return media.id == id
  })
  library.splice(index,1)
  console.log(library)
  renderLibrary()
}

function createSlider(item){
  const containerSlider = document.createElement("div");
  containerSlider.setAttribute("id", `slider${item.id}`);
  containerSlider.classList.add("hidden");

  const labelSlider = document.createElement("label");
  labelSlider.classList.add("switch")

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox")
  checkBox.setAttribute("id", `input${item.id}`)
  checkBox.classList.add("checkbox");

  const spanSlider = document.createElement("span");
  spanSlider.classList.add("slider")
  spanSlider.classList.add("round")

  labelSlider.appendChild(checkBox)
  labelSlider.appendChild(spanSlider)

  containerSlider.appendChild(labelSlider)

  return containerSlider


}

function renderLibrary(){
  const libraryContainer = document.getElementById("container--library");


  // libraryContainer.innerHTML = "";
  while (libraryContainer.firstChild) 
    {libraryContainer.removeChild(libraryContainer.firstChild)}
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

    const titleText = document.createElement("p");
    titleText.setAttribute("id", `text${item.id}`);
    titleText.classList.add("thumbText")
    titleText.textContent = `${item.title}`

    const consumedText = document.createElement("p");
    consumedText.setAttribute("id", `text${item.id}`);
    consumedText.classList.add("thumbText")
    consumedText.textContent = `Finished:`
    consumedText.appendChild(createSlider(item))

    textContainer.appendChild(titleText)
    textContainer.appendChild(consumedText)
    
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
      "mediaData": "book",
      "title": "The Night Circus",
      "maker": [
          "Erin Morgenstern"
      ],
      "year": "2011",
      "imageSource": "http://books.google.com/books/content?id=t1MDOGpyW9gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358033182,
      "mediaData": "book",
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
      "mediaData": "book",
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
      "mediaData": "movie",
      "title": "Blade Runner",
      "maker": "",
      "year": "1982-06-25",
      "imageSource": "http://image.tmdb.org/t/p//w154/qLX91FhHWCVrxDVsw0g2UD5c3Zk.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358083500,
      "mediaData": "movie",
      "title": "Blade Runner 2049",
      "maker": "",
      "year": "2017-10-04",
      "imageSource": "http://image.tmdb.org/t/p//w154/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358115996,
      "mediaData": "movie",
      "title": "Up",
      "maker": "",
      "year": "2009-05-28",
      "imageSource": "http://image.tmdb.org/t/p//w154/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358130059,
      "mediaData": "game",
      "title": "Donkey Kong 64",
      "maker": "",
      "year": "1999-11-22",
      "imageSource": "https://media.rawg.io/media/screenshots/a67/a672a4e9b978e83779f9f57b6888c94c.jpg",
      "consumedStatus": false,
      "review": 2
  },
  {
      "id": 1676358161370,
      "mediaData": "game",
      "title": "Sonic the Hedgehog 2",
      "maker": "",
      "year": "1992-11-21",
      "imageSource": "https://media.rawg.io/media/screenshots/4ca/4ca52a75bc88b162271545064b0c811f.jpg",
      "consumedStatus": false,
      "review": 2
  }
]


export {addToLibrary, renderLibrary, removeMedia}













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

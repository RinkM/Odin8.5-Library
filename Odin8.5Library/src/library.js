
function addToLibrary (media){
  
  library.push(media);
  console.log(library);
  return library
}


function renderLibrary(){

  const libraryContainer = document.getElementById("container--library");


  libraryContainer.innerHTML = "";
  library.map((item) => {
    const mediaDiv = document.createElement("div");
    mediaDiv.setAttribute("id", `item${item.id}`);
    mediaDiv.classList.add("libraryItem")
    const image = document.createElement("img");
    image.src = item.imageSource;
    image.classList.add("libraryImage")
    mediaDiv.appendChild(image)
    libraryContainer.appendChild(mediaDiv)
})
}

const removeMedia = (itemId)=> {
  const index = library.findIndex(media=> {
    return media.itemId == itemId
  })
  library.splice(index,1)
  resetCards();
  cardMaker();
}

let library = []

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


export  {addToLibrary, renderLibrary}



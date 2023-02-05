
// This is a template for the data:

const AddBook = (values) => {
  const creationDate = Date.now()
  const book = {
    mediaType : "book",
    itemId : creationDate,
    title : values.title,
    author : values.author,
    year : values.year,
    finished : true,
    review : "",
  }
  return book
}

function addToLibrary (media){
  library.push(media)
  return library
}


let library = [{
  mediaType:"book",
  itemId:0,
  title:"The Hobbit",
  author: "J. R. R. Tolkien",
  year:"1954",
  finished: true,
  review: "",
  info: function() {
      const bookInfo = `${this.title} by ${this.author}. Released in ${this.year}. Read? ${this.finished}`;
      return bookInfo
  }
}, 
{
  mediaType:"book",
  itemId:1,
  title:"The Martian",
  author: "Andy Weir",
  year:"2011",
  finished: true,
  review: "",
  info: function() {
      const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.finished}`;
      return bookInfo
  }
},
{
  mediaType:"film",
  itemId:2,
  title:"The Hobbit",
  author: "Peter Jackson",
  year:"2012",
  finished: true,
  review:"",
  notes:"",

  info : function() {
      const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.finished}`;
      return filmInfo
  }
},
{
  mediaType:"game",
  itemId:3,
  title:"The Legend of Zelda : Breath of the Wild",
  author: "Nintendo",
  year:"2017",
  finished: false,
  review:"",
  notes:"",
  info : function() {
      const gameInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Played? ${this.finished}`;
      return gameInfo
  }
},
{

mediaType: "book",
itemId: 4,
title: "Hyperion",
author: "Dan Simmons",
year: "1989",
finished: "false",
review: "It was good",
notes: "I liked it.",
info : function() {
  const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.finished}`;
  return filmInfo
}
}
]



const removeMedia = (itemId)=> {
  const index = library.findIndex(media=> {
    return media.itemId == itemId
  })
  library.splice(index,1)
  resetCards();
  cardMaker();
}



export default {library, removeMedia}


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

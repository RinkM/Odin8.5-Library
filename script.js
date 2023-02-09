
let library = [
  {
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




let items = 5

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

// dummy data used while testing. 
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


// funtion after form is filled out and submit button pressed.
// creates new BOOK using all the data from the form. 
function submitForm (formType){
    let mediaData = {};
    let formInputs = [];
    let checkbox;
    // pulls the input data from forms.  
    if (formType == "book"){
      checkbox = document.getElementById('checkboxBook')
      formInputs = Array.from(document.querySelectorAll('.inputBook'))
      }
      else if( formType =="film"){
        checkbox = document.getElementById('checkboxFilm');
        formInputs = Array.from(document.querySelectorAll('.inputFilm'))

      }else if( formType =="game"){
        checkbox = document.getElementById('checkboxGame');
        formInputs = Array.from(document.querySelectorAll('.inputGame'))
      }else {
        console.log("formtype Error")};
    formInputs.map(inputs => mediaData[inputs.id] = inputs.value);
    library[library.length] = new Media (
      mediaData.mediaType,
      items,
      mediaData.title,
      mediaData.author,
      mediaData.year,
      checkbox.checked,
      mediaData.review,
      mediaData.notes,
    )
    items++;

    console.log(mediaData);

    // clears the screen and re-draws the cards
    returnScreen();
    resetCards();
    cardMaker();
}



// ? from Dog Form.     look at verify information....
// create a verify function to test the inputs...
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     const entries = formData.entries();
//     for (var input of entries) {
//       (userInfo[input[0]] = input[1]);
//     }
//     console.log(userInfo)
//     if (verify()){alert("Thanks for your interest! We will contact you soon.")}
//     });



function makeDelButton (){
  const delCard = document.createElement("div")
  delCard.classList.add("delCard")
  delCard.classList.add("hidden")
  delCard.classList.add("delCard")

  const delButton = document.createElement("button")
  delButton.classList.add("delButton")
  delButton.classList.add("material-symbols-outlined")
  delButton.textContent = "delete_forever";
  delButton.addEventListener('click', trashButton)
  
  delCard.appendChild(delButton);

  return delCard
  
}


// builds the cards from each entry in the library.  
function cardMaker(){
  library.map(object=> {

    const mediaCard = document.createElement("div")
    mediaCard.classList.add("media")

    const mediaInformation = document.createElement("fieldset")
    mediaInformation.classList.add("mediaContainer")
    mediaCard.id = `${object.itemId}`

    const legend = document.createElement("legend")
    legend.classList.add("legend")
    legend.classList.add("smallText")

    const finished = document.createElement("div");
    finished.classList.add("finishedStatus");
    
    if(object.mediaType == 'book'){
      mediaInformation.classList.add("bookBorder")
      legend.classList.add("bookBorder")
      legend.innerText = "Book"

    }else if(object.mediaType == 'film') {
      mediaInformation.classList.add("filmBorder")
      legend.classList.add("filmBorder")
      legend.innerText = "Film"
      
    }else if (object.mediaType == 'game'){
      mediaInformation.classList.add("gameBorder")
      legend.classList.add("gameBorder")
      legend.innerText = "Video Game"
    }
    
    const itemTitle = document.createElement("h1");
    itemTitle.classList.add("title");
    itemTitle.classList.add("largeText");
    itemTitle.textContent = `${object.title}`;

    const itemAuthor = document.createElement("div");
    itemAuthor.classList.add("author");
    itemAuthor.classList.add("smallText");
    itemAuthor.textContent = `${object.author}`;

    const itemYear = document.createElement("div");
    itemYear.classList.add("year");
    itemYear.classList.add("smallText");
    itemYear.textContent = `${object.year}`;

    const itemReview = document.createElement("div");
    itemReview.classList.add("review");
    itemReview.classList.add("smallText");
    itemReview.textContent = `${object.review}`;

    const itemNotes = document.createElement("div");
    itemNotes.classList.add("notes");
    itemNotes.classList.add("smallText");
    itemNotes.textContent = `${object.notes}`;

    mediaInformation.appendChild(legend);
    mediaInformation.appendChild(finished);
    mediaInformation.appendChild(itemTitle);
    mediaInformation.appendChild(itemAuthor);
    mediaInformation.appendChild(itemYear);
    mediaInformation.appendChild(itemReview);
    mediaInformation.appendChild(itemNotes);
    mediaCard.appendChild(mediaInformation);

    mediaCard.appendChild(makeDelButton())

    const libraryDiv = document.getElementsByClassName("libraryContainer")[0];
    libraryDiv.appendChild(mediaCard)
  })
}


function resetCards(){
  const library = document.getElementsByClassName("libraryContainer")[0];
    library.innerHTML = "";

}



// All Teal Button Constants
const addButton = document.getElementById('addButton')
const editButton = document.getElementById('editButton')

const bookSelect = document.getElementById('bookSelect')
const filmSelect = document.getElementById('filmSelect')
const gameSelect = document.getElementById('gameSelect')

const bookButton = document.getElementById('bookButton')
const filmButton = document.getElementById('filmButton')
const gameButton = document.getElementById('gameButton')

// used to return to home screen, like after pressing the add button.
const returnScreen =()=>{
  const library = document.getElementsByClassName("libraryContainer")[0];
  library.classList.remove('blur')
  
  const bookForm = document.getElementById('bookForm')
  bookForm.classList.add("hidden")

  const filmForm = document.getElementById('filmForm')
  filmForm.classList.add("hidden")

  const gameForm = document.getElementById('gameForm')
  gameForm.classList.add("hidden")

  const formSelector = document.getElementById('formSelector')
  formSelector.classList.add("hidden")
}


// after add button pressed.  blurs the screen and shows teh form selector.
const addForm =()=>{
    const library = document.getElementsByClassName("libraryContainer")[0];
    library.classList.add('blur')
    
    const bookForm = document.getElementById('bookForm')
    bookForm.classList.add("hidden")

    const filmForm = document.getElementById('filmForm')
    filmForm.classList.add("hidden")

    const gameForm = document.getElementById('gameForm')
    gameForm.classList.add("hidden")

    const formSelector = document.getElementById('formSelector')
    formSelector.classList.remove("hidden")


}

const hideDiv = (divId)=>{
  const hiddenDiv = document.getElementById(divId);
  hiddenDiv.classList.add("hidden");
}

const showDiv = (divId)=>{
  // hideFormSelector()
  const visibleDiv = document.getElementById(divId)
  visibleDiv.classList.remove("hidden")
}

// Button Functions
addButton.addEventListener("click",addForm)
editButton.addEventListener("click", editPress)
bookSelect.addEventListener("click", function(){
  showDiv('bookForm');
  hideDiv('formSelector')
})
filmSelect.addEventListener("click", function(){
  showDiv("filmForm");
  hideDiv('formSelector')
})
gameSelect.addEventListener("click", function(){
  showDiv("gameForm");
  hideDiv('formSelector')
})
bookButton.addEventListener("click", function(){
    submitForm('book');
})
filmButton.addEventListener("click",function(){
    submitForm('film');
})
gameButton.addEventListener("click",function(){
    submitForm('game');
})

const handleKeyboardInput = (e) => {
  // console.log(e)
  if (e.key == "Escape") {
    returnScreen();
    resetCards();
    cardMaker();
    
    // hideDiv('formSelector')
    // hideDiv("gameForm");
    // hideDiv("filmForm");
    // hideDiv('bookForm');

  } else if (e.key == "Enter"){

  }
};

window.addEventListener("keydown", handleKeyboardInput)

cardMaker()


function cardShake(){
  const libraryDiv = document.getElementsByClassName("mediaContainer")
  const allCards = Array.from(libraryDiv)
    allCards.map(card => {
    card.style.animation = "shake 1s";
      }
    )
    setTimeout (resetShake,1000)
    } 

// resets the shaking cards. 
function resetShake(){
const libraryDiv = document.getElementsByClassName("mediaContainer")
const allCards = Array.from(libraryDiv)
    allCards.map(card => {
      console.log(card.style.animation)
      card.style.removeProperty('animation')
        }
      )
    }


function editPress (){
  returnScreen()
  const delDiv = document.getElementsByClassName("delCard")
  const allDel = Array.from(delDiv);
  const delClasses = allDel[0].classList;
  allDel.map(card => {
    card.classList.toggle("hidden")
    }
  )
  if (Array.from(delClasses).indexOf('hidden') == true){
    console.log('hidden is true')
    resetShake()
    
  } else {
    console.log('hidden is false')
    
    cardShake()
  }
  }

function trashButton (evt){
   const selection = evt.target.parentElement.parentElement.id;
   removeMedia(selection)
}


function clickAway (evt){
  const selection = evt.target;
  console.log(selection)
}

window.addEventListener('click', clickAway) 
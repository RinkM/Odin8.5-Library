let items = 5


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
    title:"The Hobbit",
    author: "J. R. R. Tolkien",
    year:"1937",
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
  year: "1989`",
  finished: "false",
  review: "It was good",
  notes: "I liked it.",
  info : function() {
    const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.finished}`;
    return filmInfo
  }
  



}
]




function Pizza (pizzaType){
  this.itemID = 22;
  this.pizzaType = pizzaType;
  this.name = "I'm a pizza";
  this.remove = function (element){
    element = "It worked!"
  };
  this.info = function() {
    const information = `You wanted a ${this.pizzaType} pizza.`;
    return information
};
  this.result = library.find(media=> {
  return media.itemId === this.itemID
});
}
function Book (mediaType, itemId, title, author, year, finished, review, notes){
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
  this.matchID = (element) => element.itemId == this.itemId;
  
}

const removeMedia = (itemID)=> {
  const index = library.findIndex(media=> {
    return media.itemId === itemID
  })
  library.splice(index,1)
  resetCards();
  cardMaker();
}

// someArray.splice(x, 1)


const addForms = document.getElementsByClassName("addForm");


// funtion when form is filled out and submit button pressed.
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

    // mediaData['itemId'] = items;
    // mediaData['finished'] = checkbox.checked

    formInputs.map(inputs => mediaData[inputs.id] = inputs.value);

    library[library.length] = new Book (
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
    // library.push(mediaData);
    returnScreen();
    resetCards();
    cardMaker();


}



// ? from Dog Form.     look at verify information....
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



function cardMaker(){
  library.map(object=> {
    const mediaCard = document.createElement("fieldset")
    mediaCard.classList.add("mediaContainer")
    mediaCard.id = `card${object.itemId}`

    const legend = document.createElement("legend")
    legend.classList.add("legend")
    legend.classList.add("smallText")

    const finished = document.createElement("div");
    finished.classList.add("finishedStatus");
    
    if(object.mediaType == 'book'){
    //   mediaCard.classList.add("bookBackground")
      mediaCard.classList.add("bookBorder")
      legend.classList.add("bookBorder")
      legend.innerText = "Book"

    }else if(object.mediaType == 'film') {
    //   mediaCard.classList.add("filmBackground")
      mediaCard.classList.add("filmBorder")
      legend.classList.add("filmBorder")
      legend.innerText = "Film"
      
    }else if (object.mediaType == 'game'){
    //   mediaCard.classList.add("gameBackground")
      mediaCard.classList.add("gameBorder")
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

    mediaCard.appendChild(legend);
    mediaCard.appendChild(finished);
    mediaCard.appendChild(itemTitle);
    mediaCard.appendChild(itemAuthor);
    mediaCard.appendChild(itemYear);
    mediaCard.appendChild(itemReview);
    mediaCard.appendChild(itemNotes);

    const libraryDiv = document.getElementsByClassName("libraryContainer")[0];
    libraryDiv.appendChild(mediaCard)
    

  })


}


function resetCards(){
  const library = document.getElementsByClassName("libraryContainer")[0];
    library.innerHTML = "";

}



// All Button Constants
const addButton = document.getElementById('addButton')
const editButton = document.getElementById('editButton')

const bookSelect = document.getElementById('bookSelect')
const filmSelect = document.getElementById('filmSelect')
const gameSelect = document.getElementById('gameSelect')

const bookButton = document.getElementById('bookButton')
const filmButton = document.getElementById('filmButton')
const gameButton = document.getElementById('gameButton')





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


// How do I reduce these?     The button wouldn't let me pass arguments without running)

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
    returnScreen()
    
    // hideDiv('formSelector')
    // hideDiv("gameForm");
    // hideDiv("filmForm");
    // hideDiv('bookForm');

  } else if (e.key == "Enter"){

  }



  // if ((e.key >= 0 && e.key <= 9) || e.key == ".") {buttonNumber(e.key);
  // } else if (e.key == "=" || e.key == "Enter") {buttonEquals();
  // } else if (e.key == "Escape") {buttonClear();
  // } else if (e.key == "*"){buttonOperation("x");
  // } else if (e.key == "+" || e.key == "-" || e.key == "x" || e.key == "/") {{buttonOperation(e.key);}
  // }
  
  // if (e.key == "Backspace") deleteOne();
};


window.addEventListener("keydown", handleKeyboardInput)




cardMaker()





function editPress (){
  const libraryDiv = document.getElementsByClassName("libraryContainer")
  // selects all cards in libary.
  const allCards = Array.from(libraryDiv[0].childNodes)
  
  allCards.map(card => {
    console.log(card)
    card.style.animation = "shake .5s";
      }
    )
// resets the shaking cards. 
    allCards.map(card => {
      console.log(card.style.animation)
      setTimeout(clear => card.style.removeProperty('animation'),500);
      // card.classList.toggle('blur')
        }
      )



  }



  const mediaCard = document.createElement("fieldset")
  mediaCard.classList.add("mediaContainer")
  // mediaCard.id = `card${object.itemId}`
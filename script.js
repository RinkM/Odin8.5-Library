// This is a template for the data:
let library = {
    "books":[{
            mediaType:"book",
            bookId:0,
            title:"The Hobbit",
            author: "J. R. R. Tolkien",
            published:"1954",
            consumedStatus: true,
            priority:"",
            review: "",
            info: function() {
                const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
                return bookInfo
            }
        },
        {
            mediaType:"book",
            bookId:0,
            title:"The Hobbit",
            author: "J. R. R. Tolkien",
            published:"1954",
            consumedStatus: true,
            priority:"",
            review: "",
            info: function() {
                const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
                return bookInfo
            }
        },

    ],
    "films":[{
        mediaType:"film",
        filmId:"0",
        title:"The Hobbit",
        director: "Peter Jackson",
        released:"2014",
        consumedStatus: false,

        info : function() {
            const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.consumedStatus}`;
            return filmInfo
        },
    },
],
"games":[{
    mediaType:"game",
    gameId:"0",
    title:"The Legend of Zelda : Breath of the Wild",
    developer: "Nintendo",
    released:"2018",
    consumedStatus: false,
    

    info : function() {
        const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.consumedStatus}`;
        return filmInfo
    },
},
],
}






function Book (title, author, pages, consumedStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.consumedStatus = consumedStatus;
    this.info = function() {
        const bookInfo = `${this.title} by ${this.author}. ${this.pages} pages. Read? ${this.consumedStatus}`;
        return bookInfo
    
    }
}

function Film (title, minutes, director, consumedStatus){
    this.title = title;
    this.minutes = minutes;
    this.director = director;
    this.consumedStatus = consumedStatus;
    this.info = function() {
        const filmInfo = `${this.title} by ${this.director}. ${this.minutes} minutes long. Watched? ${this.consumedStatus}`;
        return filmInfo
    }

}




//! library.books.push(submitBook())   adds book to the library 

const addForms = document.getElementsByClassName("addForm");


// funtion when form is filled out and submit button pressed.
function submitForm (formType){
    let mediaData = {};
    let formInputs = [];
    if (formType == "book"){
        formInputs = Array.from(document.querySelectorAll('#enterBook input'))
        }
    else if( formType =="film"){
        formInputs = Array.from(document.querySelectorAll('#enterFilm input'))
    }else if( formType =="game"){
        formInputs = Array.from(document.querySelectorAll('#enterGame input'))
    }else {
        console.log("formtype Error")}
        formInputs.map(inputs => mediaData[inputs.id] = inputs.value);
        console.log(mediaData)
    
    return mediaData
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

    const mediaCard = document.createElement("div")
    // mediaCard.setAttribute("id", )
    mediaCard.classList.add("mediaContainer");
    const consumed = document.createElement("div");
    consumed.classList.add("consumedStatus");

    const itemTitle = document.createElement("h1");
    itemTitle.classList.add("title");
    const itemAuthor = document.createElement("div");
    itemAuthor.classList.add("author");
    const itemPublished = document.createElement("div");
    itemPublished.classList.add("published");
    const itemPages = document.createElement("div");
    itemPages.classList.add("pages");
    const itemReview = document.createElement("div");
    itemReview.classList.add("review");
    const itemNotes = document.createElement("div");
    itemNotes.classList.add("notes");



    mediaCard.appendChild(consumed);
    mediaCard.appendChild(itemTitle);
    mediaCard.appendChild(itemAuthor);
    mediaCard.appendChild(itemPublished);
    mediaCard.appendChild(itemPages);
    mediaCard.appendChild(itemReview);
    mediaCard.appendChild(itemNotes);

    const library = document.getElementsByClassName("libraryContainer")[0];
    library.appendChild(mediaCard)
    
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

const hideFormSelector = ()=>{
    const formSelector = document.getElementById('formSelector');
    formSelector.classList.add("hidden");
}

const showBookForm = ()=>{
    hideFormSelector()
    const bookForm = document.getElementById('bookForm')
    bookForm.classList.remove("hidden")
}

const showFilmForm = ()=>{
    hideFormSelector()
    const filmForm = document.getElementById('filmForm');
    filmForm.classList.remove("hidden");
}

const showGameForm = ()=>{
    hideFormSelector()
    const gameForm = document.getElementById('gameForm')
    gameForm.classList.remove("hidden")
}


addButton.addEventListener("click",addForm)

bookSelect.addEventListener("click", showBookForm)
filmSelect.addEventListener("click", showFilmForm)
gameSelect.addEventListener("click", showGameForm)

bookButton.addEventListener("click", function(){
    submitForm('book');})
filmButton.addEventListener("click",function(){
    submitForm('film');})
gameButton.addEventListener("click",function(){
    submitForm('game');})





// make function tto add to library. 
// make function 
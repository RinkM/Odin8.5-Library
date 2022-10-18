// This is a template for the data:
let library = {
    "books":[{
            type:"book",
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
        type:"film",
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
    type:"game",
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
const bookButton = document.getElementById('bookButton')
const filmButton = document.getElementById('filmButton')
const gameButton = document.getElementById('gameButton')



const showForm = ()=>{
 
    const bookForm = document.getElementById('bookForm')
    bookForm.classList.remove("hidden")
    

}


addButton.addEventListener("click",showForm )

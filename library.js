
// This is a template for the data:





let library = {
    "books":[{
            mediaType:"book",
            itemId:0,
            title:"The Hobbit",
            author: "J. R. R. Tolkien",
            year:"1954",
            finished: true,
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
            finished: true,
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
        finished: true,
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



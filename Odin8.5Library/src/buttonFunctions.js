




















// All Teal Button Constants
const addButton = document.getElementById('addButton')
const editButton = document.getElementById('editButton')

const bookSelect = document.getElementById('bookSelect')
const filmSelect = document.getElementById('filmSelect')
const gameSelect = document.getElementById('gameSelect')

const bookButton = document.getElementById('bookButton')
const filmButton = document.getElementById('filmButton')
const gameButton = document.getElementById('gameButton')

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




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
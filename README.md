


# Odin8.5-Library


## Notes from 10/30

added the thumbnail for trash can.  CSSed the crap out of it.   
CHanged edit button function so it adds the trash can and dancing boxes.  and stops them all too. 

"how to select an item when clicked javascript"
https://softauthor.com/get-id-of-clicked-element-in-javascript/

## notes from 10/28

worked on adding a function to the book object creater, but it wasn't working.
Added a separate remove function that needs a number passed through.   it works well enoguh.

Need to build EDIT div template.  Could just be a trashcan.   Press Edit 1 time.  It's there (Change edit to cancel)  
press edit / cancel again and it reverts and the div is hidden.
what about just a button that says 'remove' 
then a 'are you sure?' question?    maybe not.




## notes from 10/22

  library.splice(bookObject, 1)

  got checkbox working
  got escape key to work.   
  enter key doesn't work yet...  can I have 'enter' always work, but if then if the form container is visible?   doees same as submit when visible?


  verification doesn't work yet either....

  changed the libary to add items with consturctor function.   New Book.

found google API and thought about using it.  how??????????

  To do:
  verification
  layout + formatting
  how to reemove an item.
  let bookObject = library.findIndex(x => x.id === bookID)  will this help?


   

Inspiration: 
https://enplace.github.io/top-library/
Uses a search bar. as you type, it filters the titles
Uses Google APi for books.

https://theonlyhamstertoh.github.io/libraryProject/


    https://codepen.io/lsirivong/pen/nRNLYL
    ratings 


    https://austintirrell.github.io/library/
    simple style

https://mattxmade.github.io/odin-library/
ratings and the font changes.  asks the genre of the book.   
like the style....


A library to keep track of books and movies.


WHat's the point?

What about the reivewed ones go bottom?   Unread ones make up a list of NEXT reads.

What about two lists?  
Read + Review + Recommendation ?

Wishlist Reading.

## Notes from 10/20
got the form to work and submit
got the card to get drawn
need to set up form verification.  at least for years and blank spots

the check box doesn't work.    why not?   bookRead.checked?
edit a card - allow you tto touch and select a card?
how?

Sort should be easy.    pull down menu?   radio buttons?

still need to fix formatting for cards. and finished status. 
how to escape adding a card.   clicking out.   X buutton?   




## Notes from 10/18

Overall, did things from 10/17 notese.   added blur, centered form, added forms, toggl through thee first form and move into the second.

Things to do now : 
fix the forms.  They don't reflect what you see in the data. 
Toggle the read / not read toggle.  
change via js what the bottom div section looks like. 

form submits all the information?   clear out the other info when toggled between?

escape key quits the box.
click anywhere else escapes thee box.




HOW DO I SUBMIT THE FORM?

how do I draw the cards?
I made a media card, now, I have to style it right? 
what happenns when there's lots of notes?    Character limit???




## Notes from 10/17

Got button to work. Need to change what happens. It shouldn't shift everything, but put the form on front.
- fixed this. 

Form needs to change to reflect whta you're adding.
Box with three boxes inside?   Movie, game, film?
- fixed

how do you distinguish the media types.   Whata color?      Need outlines / shadows for them?
- thought about it.. 

how do I deal with the entry button?   How does it show the information?


Can I sort the movies?   

How can I save?
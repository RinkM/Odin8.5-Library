# Odin8.5-Library

Assignment is found here : 
https://www.theodinproject.com/lessons/node-path-javascript-library

## Learning Objectives 
* Goal is to create a media library where user can add books to their library and information regarding the books. 
* User should be able to add and remove items.  
* Practice organizing data using objects. 
* More form practice. 


## Summary of Learning
* Stretch Goal - differentiate the media types (book, game, film) with different info, objects, and styles. 
* built objects using object contstructors.
* built more forms to enter data, then display the data.
* differentiated the forms and information depending on media type
* practiced using CSS animation
* used JS to build many features. 

## Stretch Goals - Future?
* Major one is to add API info with book / game / movie  cover.  check the information and autopopulate it.   I'm not there... yet.

## 2nd Branch Goals
From Odin 
`Go back to your “Library” example and refactor it to use class instead of plain constructors. Don’t forget to use the git workflow you learned in this foundations lesson to work on a new feature. You should get used to working like this! `


## Notes Jan 30 2023
Revision. 

# Feb 22
the add button shows books AND games problem
fix the consumed toggle
nightmode issues
remove the header colors. 
improve the header. give title.  ADD A FOX?  Squirrel?



Changes include...

TODO Feb 17 2023
organize the types.  games with games etc.   does this mean I need to add something to library...

API CALLS:
Does a search to Movie API and gathers some information. makes a second call for movie poster information.

uses GoogleBooks API to get all information about the books.

Tried 4 different API services for Games.
Tried IMVD g
Tried GiantBomb - Used Jquery and JSONP (Javacript With Padding) to gain information.
Tried Rawg - get game info, but doesn't return the correct box-art. They don't have it.
Tried Twitch.  


How the app works : 
1) app displays the data in the library. Builds a card for each item. *library includes img of the item. *
2) on Add Media button press, form opens.  Select media type. New form to fill in the item and information.
3) Add API Calls to each form to search for the media name.  Get information about the item and display it.
4) Take form data and add new object to the library.  Class ? Or function?
5) 


Html : Main page, 1+3 forms (error msgs!), 

Javascript : Display media.

Entry point:


## notes from 10/31
got remove buttons to work.

need to look at escape key.  can use it for edit button too...

const handleKeyboardInput = (e) => {
  // console.log(e)
  if (e.key == "Escape") {
    returnScreen()

Overflow from cards.   Like if there's a really large title.   Can scroll?   Expand???  IDK?



thigns to add :
5 star ratings.  only after you've read it.
wishlist?
notes?   do I really need them?
re-draw teh cards.  the style is BORING.

a way to sort?




## Notes from 10/30

added the thumbnail for trash can.  CSSed the crap out of it.   
CHanged edit button function so it adds the trash can and dancing boxes.  and stops them all too. 

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
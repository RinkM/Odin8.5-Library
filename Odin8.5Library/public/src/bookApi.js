


 async function bookSearch (searchTerm){
  const bookApi = "AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${bookApi}`
  const response = await fetch(bookUrl);
  const info = await response.json();

  const fiveBookItems = info.items.slice(0,5)
  // fiveBookItems.map((book)=> {
  //   book.volumeInfo})
  return fiveBookItems
}




export default bookSearch
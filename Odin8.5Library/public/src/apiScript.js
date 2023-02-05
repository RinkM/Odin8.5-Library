


 async function bookSearch (searchTerm){
  const bookApi = "AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${bookApi}`
  const response = await fetch(bookUrl)
  const info = await response.json();
  // console.log(info)
  const fiveItems = info.items.slice(4)
  fiveItems.map((book)=> {
    console.log(book.volumeInfo.title)})
  return info
}


export default bookSearch



 async function bookSearch (searchTerm){
  const bookApi = "AIzaSyCYb9xFkhhrcWT-XCmubvoJXQHnH0U7sWA"
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${bookApi}`
  const response = await fetch(bookUrl);
  const info = await response.json();
  const fiveBookItems = info.items.slice(0,5)
  return fiveBookItems
}


async function gameSearch (searchTerm){
  const gameApi = "64c2aeeb46ed47e2a2ce4c9f002e020f"
  const url = `https://api.rawg.io/api/games?key=${gameApi}&search=${searchTerm}`
  const response = await fetch(url);
  const info = await response.json();
  const fiveGameItems = info.results.slice(0,5)
  console.log(fiveGameItems)
  return fiveGameItems
}






export {bookSearch, gameSearch}
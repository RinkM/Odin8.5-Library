


async function movieSearch (searchTerm){
  const movieApi = "38e8b2e2ac2be3f92ce69d44aef52eef";
  const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${movieApi}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const response = await fetch(searchAPI);
  const info = await response.json();
  // console.log(info.results)
  const fiveItems = info.results.slice(0, 4)
  console.log(fiveItems)
  fiveItems.map((movie)=>{
    console.log (movie.title, movie.id)
  })

  return info
} 


export default movieSearch;
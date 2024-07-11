export default async function SearchTerm({ params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`);
  if (!res.ok) throw new Error('Error fetching data');
  const data = await res.json();
  const results = data.results;

  return (
    <>
      <div>
        { results && results.length < 1 ? (<h1>No results found</h1>) : (<h1>Your search for {params.searchTerm} returned the follow:</h1>) }
      </div>
    </>
  )
}

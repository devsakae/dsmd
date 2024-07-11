import Results from "@/components/Results";
import Loading from "./loading";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'trending';
  const res = await fetch(`https://api.themoviedb.org/3/${ genre === 'topRated' ? 'movie/top_rated' : 'trending/all/week' }?api_key=${API_KEY}&language=en-US&page=1`, {
    next: { revalidate: 10000 }
  });
  if (!res.ok) throw new Error('Some error ocurred.');
  const data = await res.json();
  const results = data.results;

  return (
    <div className="my-4">
      { results.length < 1 ? <Loading /> : (<Results results={ results } />) }
    </div>
  )
}

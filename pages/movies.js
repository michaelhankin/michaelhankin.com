import Layout from "../components/layout";
import Link from "../components/link";
import { getMovies } from "../lib/movies";

export default function Movies({ movies }) {
  const { upNext, watched } = movies;
  return (
    <Layout title="Movies | Michael Hankin">
      <main>
        <div className="space-y-6 text-lg leading-normal">
          <p>
            One of my earliest memories is going to the theater to see{" "}
            <Link href="https://www.imdb.com/title/tt0158811/">a movie</Link>{" "}
            with my family. Ever since then, I've loved watching movies,
            especially in theaters.
          </p>
          <p>
            On this page, I'm going to keep a list of movies that I plan on
            watching. I'll update the list when I watch one of them, and add
            some of my thoughts on it.
          </p>
          <div>
            <h2 className="font-bold mb-3 text-xl">Watched</h2>
            {watched.length ? (
              <ul className="space-y-2">
                {watched.map(({ title, imdbLink, comments }) => (
                  <li key={title}>
                    <Link href={imdbLink}>{title}</Link>
                    <details className="ml-6 mt-2">
                      <summary>Comments</summary>
                      <p className="ml-4 mt-2">{comments}</p>
                    </details>
                  </li>
                ))}
              </ul>
            ) : (
              <div>None</div>
            )}
          </div>
          <div>
            <h2 className="font-bold mb-3 text-xl">Up Next</h2>
            {upNext.length ? (
              <ul className="space-y-2">
                {upNext.map(({ title, imdbLink }) => (
                  <li key={title}>
                    <Link href={imdbLink}>{title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div>None</div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const movies = getMovies();
  return {
    props: {
      movies,
    },
  };
}

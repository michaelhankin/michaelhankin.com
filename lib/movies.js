import fs from "fs";
import path from "path";

export const getMovies = () => {
  const moviesPath = path.join(process.cwd(), "data", "movies.json");
  const moviesJson = fs.readFileSync(moviesPath).toString();
  const movies = JSON.parse(moviesJson);

  return movies;
};

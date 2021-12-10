import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
interface props {
  title: string;
  fetchUrl: string;
}
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }: props) {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

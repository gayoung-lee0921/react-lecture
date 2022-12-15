import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "./Movie";
const ID = process.env.REACT_APP_API_KEY;

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams.get("move"));
  const searchMovie = searchParams.get("movie");
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${ID}&language=ko-KR&page=1&query=${searchMovie}`)
      .then((response) => {
          console.log(response.data.results);
          setmovies(response.data.results)
    });
  }, [searchMovie]); // searchMovie => 의존성배열, 해당 값이 바뀔때마다 계속 실행
  return (
    <div className="container">
      <h2>
        <strong>popular</strong>movie
      </h2>
      <ul className="movie-list">
        {movies.map((item, idx) => {
          return <Movie movieInfo={item} key={idx}></Movie>;
        })}
      </ul>
    </div>
  );
}

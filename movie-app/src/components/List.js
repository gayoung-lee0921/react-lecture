import Movie from "./Movie";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ID = process.env.REACT_APP_API_KEY;

// 화면을 갱신하면 처음으로 올라가서 데이터를 읽어옴 => 무한루프 빠짐 => useEffect 라는 hooks을 사용해야 됨
// useEffect(실행할 함수,[aa,bb]) 이 때 배열은 의존성배열(dependencies), 함수를 실행하는데 변수 aa가 bb로 바꿀 때 멈춤, 배열 자리에 아무것도 안쓰면 1번만 실행함
export default function List() {
  // useState() 를 사용해 화면을 변경해보자(=화면 랜더링)
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${ID}&language=ko-KR&page=1`)
    .then((response) => {
        console.log(response.data.results);
        setmovies(response.data.results)
  });
  }, []);
  return (
    <div className="container">
      <h2>
        <strong>popular</strong>movie
      </h2>
      <ul className="movie-list">
        {movies.map((item, idx) => {
          // return (
          //   <Movie title={item.title} originalTitle={item.original_title} releaseDate={item.release_date} key={idx} poster={item.poster_path} overview={item.overview} vote={item.vote_average}></Movie>
          // );
          return <Movie movieInfo={item} key={idx}></Movie>;
        })}
      </ul>
    </div>
  );
}

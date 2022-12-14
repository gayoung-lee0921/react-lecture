import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ID = process.env.REACT_APP_API_KEY;

export default function Detail() {
  const [count, setCount] = useState(0);
  const movieId = useParams().id;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState("");
  const [cast, setCast] = useState([]);

  // prettier-ignore

  useEffect(()=>{
    axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ID}&language=ko-KR`)
    .then((response) => {
      setDetail(response.data);
      setGenres(response.data.genres.map(item => item.name).join('/')); // 배열을 문자로 바꾸기 위해선 .join()
      //console.log(genres)
    })
      // prettier-ignore
      axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ID}&language=en-US`)
        .then((response)=>{
            //console.log(response.data.cast)
            setCast(response.data.cast.map(item => item.profile_path))
            console.log(cast)
        })

    },[]);

  return (
    <>
      <div className="container detail">
        {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button> */}
        <h2>{detail.title}</h2>
        <div className="detail-box">
          <div className="img-box">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />{" "}
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{detail.title}</h3>
              <p className="original-title">{detail.original_title}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd>{genres}</dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>상영시간</dt>
                <dd>{detail.runtime}</dd>
              </dl>
              <dl>
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>줄거리</dt>
                <dd className="desc">{detail.overview}</dd>
              </dl>
              <dl>
                <dt>주요 출연진</dt>
                <dd>{/* <img src={`https://image.tmdb.org/t/p/w200/${cast}`} alt="" /> */}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </>
  );
}

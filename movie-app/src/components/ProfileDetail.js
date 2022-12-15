import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieItem from "./MovieItem";

const ID = process.env.REACT_APP_API_KEY;

export default function ProfileDetail() {
  const profileId = useParams().id;
  console.log("🚀 ~ file: Detail.js:7 ~ Detail ~ profileId", profileId);
  const [detail, setDetail] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //prettier-ignore
    axios
    .get(`https://api.themoviedb.org/3/person/${profileId}?api_key=${ID}&language=ko-KR`)
    .then((response)=>{
      setDetail(response.data);
      console.log(response.data)
    })

    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=${ID}&language=ko-KR`)
    .then((response)=>{
      console.log(response.data.cast);
      setMovies(response.data.cast);
    })
  }, [profileId]);

  return (
    <>
      <div className="container detail">
        <h2>{detail.name}</h2>
        <div className="detail-box">
          <div className="img-box">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt="" />
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{detail.name}</h3>
              {/* <p className="original-title">{detail.name}</p> */}
            </div>
            <div className="summary">
              <dl>
                <dt>생일</dt>
                <dd>{detail.birthday}</dd>
              </dl>
              {detail.deathday && (
                <dl>
                  <dt>사망</dt>
                  <dd>{detail.deathday}</dd>
                </dl>
              )}
              <dl>
                <dt>국적</dt>
                <dd>{detail.place_of_birth}</dd>
              </dl>
              <dl>
                <dt>인기도</dt>
                <dd>{detail.popularity}</dd>
              </dl>
              {detail.homepage && (
                <dl>
                  <dt>homepage</dt>
                  <dd class="desc">
                    <a href={detail.homepage} target="_blank" rel="noopener noreferrer">
                      {detail.homepage}
                    </a>
                  </dd>
                </dl>
              )}
              <dl>
                <dt>주요출연작</dt>
                <dd>
                  {/* 20개만 뿌리기.... swiper 만들기 */}
                  <Swiper spaceBetween={10} slidesPerView={5} className="movie-list">
                    {movies.map((item, idx) => {
                      if (idx < 20) {
                        return (
                          <SwiperSlide className="item">
                            <MovieItem title={item.title} poster={item.poster_path} id={item.id} key={idx}></MovieItem>
                          </SwiperSlide>
                        );
                      }
                    })}
                  </Swiper>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </>
  );
}

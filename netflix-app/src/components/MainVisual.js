import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import requests from "../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCube, Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieItem from "./MovieItem";

function MainVisual({ showVideo }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(requests.fetchNowPlaying);
    setMovies(result.data.results);
  };
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  //console.log(ellipsis("동해물과 백두산이 마르고 닳도록", 100));
  return (
    <Container>
      <Swiper
        modules={[EffectFade, EffectCube, Pagination, Autoplay, Navigation]}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
      >
        {movies
          .filter((item, idx) => {
            if (idx < 10) {
              return true;
            }
          })
          .map((item, idx) => {
            return (
              <SwiperSlide>
                {/* <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /> */}
                <MovieItem title={item.title} src={item.backdrop_path} desc={ellipsis(item.overview, 150)} type="main" id={item.id} showVideo={showVideo}></MovieItem>
              </SwiperSlide>
            );
          })}
        <div className="prev nav">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="next nav">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    i {
      font-size: 96px;
      color: #fff;
    }
  }
  .prev {
    left: 50px;
  }
  .next {
    right: 50px;
  }
  .swiper-pagination {
    bottom: 80px !important;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    opacity: 1;
    background: none;
    border: 3px solid #fff;
    border-radius: 100px;
    transition: all 0.25s ease;
  }
  .swiper-pagination-bullet-active {
    width: 80px;
    background-color: #fff;
  }
`;

export default MainVisual;

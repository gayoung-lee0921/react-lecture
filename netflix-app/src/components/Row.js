import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import MovieItem from "./MovieItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/pagination.css";

function Row({ title, fetchURL, type, showNum }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(fetchURL);
    //console.log(result.data.results[0]);
    setMovies(result.data.results);
  };
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  return (
    <Container>
      <div className="wrapper">
        <h2>{title}</h2>
        <Swiper
          slidesPerView={showNum ? showNum : 5}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={1000}
          slidesPerGroup={3}
          centeredSlides={true}
          initialSlide={6}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
        >
          {movies.map((item, idx) => {
            console.log(item.title);
            return (
              <div className="swiper-box">
                <SwiperSlide>
                  <MovieItem title={item.title ? item.title : item.name} src={item.poster_path} desc={item.overview} type={type}></MovieItem>
                </SwiperSlide>
              </div>
            );
          })}
          <div className="prev nav">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="next nav">
            <i className="fa fa-angle-right"></i>
          </div>
        </Swiper>
      </div>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  padding-bottom: 80px;
  margin: 100px auto 150px;
  .wrapper {
    width: 1400px;
    margin: auto;
  }
  .swiper {
    overflow: visible;
    width: 1400px;
  }
  h2 {
    font-size: 48px;
    margin-bottom: 50px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 700;
    text-align: left;
  }
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
    left: -100px;
  }
  .next {
    right: -100px;
  }
  .swiper-pagination {
    bottom: -80px !important;
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

export default Row;

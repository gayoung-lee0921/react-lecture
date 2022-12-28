import React from "react";
import Row from "./Row";
import requests from "../api/requests";

function MainContents() {
  return (
    <div>
      <Row title="netflix original" fetchURL={requests.fetchNetflixOriginals} type="banner" showNum="3"></Row>
      <Row title="top rated" fetchURL={requests.fetchTopRated} type="banner"></Row>
      <Row title="popular movie" fetchURL={requests.fetchPopular} type="banner"></Row>
    </div>
  );
}

export default MainContents;

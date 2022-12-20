import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import List from "./List";
import Search from "./Search";
import axios from "axios";

export default function Main() {
  const [videoInfo, setVideoInfo] = useState({});
  const [isDetail, setIsDetail] = useState(false);

  // 맨 위로 올리기
  const scrollTop = () => {
    // window.scrollTo(0, 0); 바로 올라가게
    window.scrollTo({ top: 0, behavior: "smooth" }); // 스무스하게 올라가기
  };

  // const showMain = ()=>{

  // }

  useEffect(() => {
    setVideoInfo({ videoId: "mgbZunbhsX0", title: "hello", description: "설명글이 들어갑니다.", channel: "fdisfudi" });
  }, []);

  const selectedVideo = (videoInfo) => {
    setVideoInfo({ videoId: videoInfo.videoId, title: videoInfo.snippet.title, description: videoInfo.snippet.description });
    setIsDetail(true);
  };

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=30&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}&chart=mostPopular&regionCode=KR`).then((response) => {
      setVideos(response.data.items);
    });
  }, []);

  const onSearch = (searchTxt) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}&order=rating&regionCode=KR&q=${searchTxt}`)
      .then((response) => {
        setVideos(response.data.items);
      });
  };

  return (
    <>
      <Search onSearch={onSearch}></Search>
      <div className={"main" + (isDetail ? " detail-view" : "")}>
        {isDetail && <Detail videoId={videoInfo.videoId} title={videoInfo.title} description={videoInfo.description}></Detail>}
        <List selectedVideo={selectedVideo} videos={videos} scrollTop={scrollTop}></List>
      </div>
    </>
  );
}

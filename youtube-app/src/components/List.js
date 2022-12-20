import React from "react";
import VideoItem from "./VideoItem";

export default function List({ selectedVideo, videos, scrollTop }) {
  return (
    <div className="container">
      <ul className="video-list">
        {videos.map((item, idx) => {
          return <VideoItem snippet={item.snippet} videoId={item.id.videoId ? item.id.videoId : item.id} key={idx} selectedVideo={selectedVideo} scrollTop={scrollTop}></VideoItem>;
        })}
      </ul>
    </div>
  );
}

import React from "react";
import VideoItem from "./VideoItem";

export default function List({ selectedVideo, videos }) {
  return (
    <div className="container">
      <ul className="video-list">
        {videos.map((item, idx) => {
          return <VideoItem snippet={item.snippet} videoId={item.id.videoId} key={idx} selectedVideo={selectedVideo}></VideoItem>;
        })}
      </ul>
    </div>
  );
}

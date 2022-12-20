import React from "react";

export default function VideoItem({ videoId, snippet, selectedVideo, scrollTop }) {
  const onClickFunc = () => {
    console.log("click");
    selectedVideo({ snippet: snippet, videoId: videoId });
    scrollTop(); // 맨 위로 가는 함수 실행
  };
  return (
    <li onClick={onClickFunc}>
      <div className="img-box">
        <img src={snippet.thumbnails.high.url} alt={snippet.title} />
      </div>
      <div className="info">
        <h3 dangerouslySetInnerHTML={{ __html: snippet.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: snippet.description }}></p>
      </div>
    </li>
  );
}

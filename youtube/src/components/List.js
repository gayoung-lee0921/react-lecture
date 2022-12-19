import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=전지현&maxResults=10&key=AIzaSyBSlE37aUdzPiiWwzK7yzRuRdqgxl4WnsM")
    .then((response) => {
      console.log(response.data.items);
      setVideoList(response.data.items);
    });
  }, []);

  return (
    <div>
      {videoList.map((item, idx) => {
        //return <img src={item.snippet.thumbnails.medium.url} alt="" key={idx}></img>;
        return (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        );
      })}
    </div>
  );
}

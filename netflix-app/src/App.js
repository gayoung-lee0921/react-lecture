import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import MainContents from "./components/MainContents";
import VideoBox from "./components/VideoBox";
import { useState } from "react";

function App() {
  const [view, setView] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const viewChange = (isView) => {
    setView(isView);
  };
  const showVideo = (id) => {
    setView(true);
    setVideoId(id);
    // videoBox를 true로 바꾸고 동영상 고유 id 전달
  };
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainVisual showVideo={showVideo}></MainVisual>
      <MainContents></MainContents>
      {view && <VideoBox viewChange={viewChange} showVideo={showVideo} videoId={videoId}></VideoBox>}
      <Footer></Footer>
    </div>
  );
}

export default App;

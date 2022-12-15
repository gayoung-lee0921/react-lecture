// 오늘은 'tmdb를 이용해서 영화 검색 사이트 만들어보기(id: dudnrkdud)'
// npm i axios
// npm i react-router-dom => a 링크 하려면 해야됨
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import ProfileDetail from "./components/ProfileDetail";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/profile/:id" element={<ProfileDetail></ProfileDetail>}></Route>
          <Route path="/search" element={<SearchResult></SearchResult>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

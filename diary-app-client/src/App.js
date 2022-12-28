import { useState, useRef, useEffect } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";
import axios from "axios";

function App() {
  const [diaryListArray, setDiaryListArray] = useState([]);
  useEffect(() => {
    async function loadDiaryList() {
      const diaryList = await axios.get("http://localhost:5000/diary/list");
      setDiaryListArray(diaryList.data);
      console.log(diaryListArray.data);
    }
    loadDiaryList();
  }, []);
  // primitive type 기본자료 object, array은 참조
  // let num = 10;
  // let num02 = num;
  // num = 30;
  // console.log(num, "===", num02);

  // let arr = [1, 2, 3];
  // let copyarr = [...arr];
  // arr.push(4);
  // console.log(arr, "===", copyarr);
  const dataId = useRef(diaryListArray.length);
  const insertDiary = async (author, contents, emotion) => {
    await axios.post("http://localhost:5000/diary/insert", {
      author,
      contents,
      emotion,
      date: new Date().getTime(),
    });
  };
  const deleteDiary = async (id) => {
    await axios.delete(`http://localhost:5000/diary/delete/${id}`);
    const diaryList = await axios.get("http://localhost:5000/diary/list");
    setDiaryListArray(diaryList.data);
  };
  const modifyDiary = async (id, localContents) => {
    await axios.put(`http://localhost:5000/diary/modify/${id}`, { contents: localContents });
    const diaryList = await axios.get("http://localhost:5000/diary/list");
    setDiaryListArray(diaryList.data);
  };

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <DiaryList diaryList={diaryListArray} deleteDiary={deleteDiary}></DiaryList>
    </div>
  );
}

export default App;

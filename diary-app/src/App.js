import { useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  // primitive type 기본자료 object, array은 참조
  // let num = 10;
  // let num02 = num;
  // num = 30;
  // console.log(num, "===", num02);

  // let arr = [1, 2, 3];
  // let copyarr = [...arr];
  // arr.push(4);
  // console.log(arr, "===", copyarr);
  const dummy = [
    { id: 1, author: "홍길동", contents: "눈이 온다", emotion: 2, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "지하철을 타고 왔다", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "오늘 저녁엔 뭘 먹을까", emotion: 4, date: new Date().getTime() },
    { id: 4, author: "노홍철", contents: "일주일의 중간이 수욜이다", emotion: 5, date: new Date().getTime() },
  ];
  const dataId = useRef(4);
  const [diaryListArray, setDiaryListArray] = useState([...dummy]);
  const insertDiary = (author, contents, emotion) => {
    // const newDiaryList = [...diaryListArray];
    // const newDiaryItem = { id: 5, author: "이가영", contents: "덥다", emotion: 4, date: new Date().getTime() };
    // newDiaryList.push(newDiaryItem);
    // setDiaryListArray(newDiaryList);
    const newDiaryItem = { id: ++dataId.current, author: author, contents: contents, emotion: emotion, date: new Date().getTime() };
    setDiaryListArray([newDiaryItem, ...diaryListArray]);
  };
  const deleteDiary = (id) => {
    //console.log(id + "deleteDiary");
    const newDiaryList = diaryListArray.filter((item, idx) => {
      return item.id !== id;
    });
    setDiaryListArray(newDiaryList);
  };
  //고유 번호에 있는 걸 찾아서 내용을 바꿔야 한다.
  const modifyDiary = (id, localContents) => {
    const modifiedDiaryListArray = diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item));
    setDiaryListArray(modifiedDiaryListArray);
    //setDiaryListArray(diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item)));
  };

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <DiaryList diaryList={diaryListArray} deleteDiary={deleteDiary} modifyDiary={modifyDiary}></DiaryList>
    </div>
  );
}

export default App;

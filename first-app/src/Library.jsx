import React from "react";
import Book from "./Book";

const bookList = [
  { title: "어린왕자", page: "100" },
  { title: "중딩왕자", page: "200" },
  { title: "고딩왕자", page: "300" },
  { title: "대딩왕자", page: "400" },
  { title: "청년왕자", page: "500" },
  { title: "중년왕자", page: "450" },
];

function Library() {
  return (
    <div>
      {/* <Book title="어린 왕자" page="100"></Book>
      <Book title="중딩 왕자" page="200"></Book>
      <Book title="고딩 왕자" page="300"></Book> */}
      {bookList.map((item, idx) => {
        return <Book title={item.title} page={item.page}></Book>;
      })}
    </div>
  );
}

// export 해야지만 다른 곳에서 라이브러리로 쓸 수 있음
export default Library;

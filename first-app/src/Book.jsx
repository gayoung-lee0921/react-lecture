import React from "react";

// 함수형 컴포넌트 생성
function Book(props) {
  return (
    // 최상위 태그가 반드시 있어야 된다
    <div>
      <h1>이 책의 제목은 {props.title} 입니다.</h1>
      <h1>이 책은 {props.page} 페이지 입니다.</h1>
      <hr />
    </div>
  );
}

export default Book;

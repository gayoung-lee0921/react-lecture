import React, { useState } from "react";
import styled from "styled-components";

export default function DiaryItem({ _id: id, author, contents, emotion, date, deleteDiary }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Item>
      <Info>
        <div className="author-box">
          <dl>
            <dt>작성자</dt>
            <dd>{author}</dd>
          </dl>
          <dl>
            <dt>감정점수</dt>
            <dd>{emotion}</dd>
          </dl>
        </div>
        <div className="date">{new Date(date).toLocaleString()}</div>
      </Info>
      {isEdit ? <ContentsBox value="눈이 옵니다. 집에 어떻게 가나요?"></ContentsBox> : <Contents>{contents}</Contents>}

      {isEdit ? (
        <Buttons>
          <Button>
            <i class="fa-solid fa-check"></i>
          </Button>
          <Button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        </Buttons>
      ) : (
        <Buttons>
          <Button
            onClick={() => {
              if (window.confirm(`${id}번째 일기를 정말로 삭제 하시겠어요?`)) {
                deleteDiary(id);
              }
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
        </Buttons>
      )}
    </Item>
  );
}

const Item = styled.li`
  background-color: #ccc;
  padding: 15px;
  border-radius: 5px;
  list-style: none;
  margin-top: 15px;
`;
const Info = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #999;
  .author-box {
    display: flex;
  }
  dl {
    display: flex;
    :before {
      content: "/";
      display: inline-block;
      padding: 0 10px;
    }
    :nth-child(1):before {
      display: none;
    }
    dd {
      margin-left: 0;
      :before {
        content: ":";
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  .date {
    text-align: left;
  }
`;
const Contents = styled.div`
  margin-top: 15px;
  text-align: left;
`;
const Button = styled.div`
  padding: 10px;
  background-color: #111;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
`;
const ContentsBox = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  min-height: 120px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  margin-top: 20px;
  transition: all 0.25s ease;
  resize: none;
  :focus {
    border-color: #f00;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/question";

export default function Question() {
  const navigate = useNavigate();
  // 질문 1~3 EI 판별 {id: "EI", score:0~3}
  // 질문 4~6 SN 판별 {id: "SN", score:0~3}
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const total = QuestionData.length - 1;
  const onClick = (point, type) => {
    const newScore = totalScore.map((item) => {
      return item.id === type ? { id: item.id, score: item.score + point } : item;
    });
    setTotalScore(newScore);
    if (questionNo < total) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce((acc, current) => acc + (current.score >= 2 ? current.id.charAt(0) : current.id.charAt(1)), "");
      navigate(`/result?mbti=${mbti}`);
    }
  };

  return (
    <Container>
      <Header className="header" color="lightpink">
        Question
      </Header>

      <Progress>
        <div className="inner">
          <div className="bar" style={{ width: `${(questionNo / 12) * 100}%` }}></div>
        </div>
      </Progress>

      <Title>{QuestionData[questionNo].title}</Title>
      <Buttons>
        <Button
          onClick={() => {
            onClick(1, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>

        <Button
          onClick={() => {
            onClick(0, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </Buttons>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.color || "#000"};
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: lightblue;
`;
const Title = styled.h2`
  text-align: center;
  font-size: clamp(20px, 4vw, 35px);
  font-weight: 700;
  margin-top: 40px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1.5;
  word-break: keep-all;
`;

const Button = styled.button`
  border: none;
  outline: none;
  width: calc(50% - 10px);
  line-height: 1.5;
  padding: 5px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 40px;
  font-family: inherit;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
`;
const Progress = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  .inner {
    width: 100%;
    height: 15px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    .bar {
      background-color: #f00;
      height: 100%;
      transition: all 0.25s ease;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0 5px;
  width: 100%;
  box-sizing: border-box;
`;

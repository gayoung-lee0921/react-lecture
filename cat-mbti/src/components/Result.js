import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/result";
import styled from "styled-components";

export default function Result() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [result, setResult] = useState({});
  useEffect(() => {
    const selectedCat = ResultData.find((item, idx) => {
      return item.best === mbti;
    });
    setResult(selectedCat);
  }, [mbti]);

  return (
    <Container>
      <Header className="header" color="lightpink">
        Result
      </Header>
      <Title>당신에게 맞는 고양이는?</Title>
      <LogoImage>
        <img src={result.image} alt={result.name}></img>
      </LogoImage>
      <Desc>당신에게 맞는 고양이는 {result.name}입니다. </Desc>
      <Desc>{result.desc}</Desc>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        다시하기
      </Button>
    </Container>
  );
}

// css in js
const Desc = styled.div`
  font-size: 35px;
  line-height: 1.5;
  margin-top: 10px;
  word-break: keep-all;
  padding: 0 10px;
`;
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
  margin-top: 20px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1;
  word-break: keep-all;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  max-width: 500px;
  min-width: 200px;
  object-fit: contain;
  border-radius: 10px;
  overflow: hidden;
`;
const Button = styled.button`
  border: none;
  outline: none;
  width: 40%;
  line-height: 1.5;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 40px;
  font-family: inherit;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
`;

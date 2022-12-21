import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ResultData } from "../assets/data/result";
import KakaoSharedButton from "../components/KakaoSharedButton";

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
      <Header className="header" color="#ffcc33">
        Result
      </Header>

      <Title>당신을 선택한 고양이는?</Title>
      <LogoImage>
        <img src={result.image} alt=""></img>
      </LogoImage>
      <Desc>당신에게 맞는 고양이는 {result.name}입니다.</Desc>
      <Desc>{result.desc}</Desc>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        다시하기
      </Button>
      <KakaoSharedButton data={result}></KakaoSharedButton>
    </Container>
  );
}
// css in js
const Desc = styled.div`
  font-size: 20px;
  line-height: 1.25;
  font-family: "Cute";
  padding: 0 20px;
  word-break: keep-all;
  color: #fff;
  margin-top: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.color || "#000"};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(16px, 3vw, 24px); // vw는 넓이의 5%
  font-weight: 700;
  margin-top: 30px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1.5;
`;
const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 30px;
  img {
    max-height: 400px;
    width: 100%;
    object-fit: contain;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  font-size: 18px;
  font-family: inherit;
  margin: 0 5px;
  width: 80%;
  word-break: keep-all;
  flex-grow: 0;
  flex-shrink: 0;
  color: #000;
  margin-top: 20px;
`;

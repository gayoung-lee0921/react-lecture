import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/main.jpg";
import { useNavigate } from "react-router-dom";
// css in js, styled components

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
  font-size: clamp(24px, 5vw, 48px);
  font-weight: 700;
  margin-top: 40px;
  color: #fff;
  word-break: keep-all;
`;
const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const Button = styled.button`
  border: none;
  outline: none;
  width: 63%;
  padding: 5px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 40px;
  font-family: inherit;
  margin-top: 50px;
`;
export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header className="header" color="lightpink">
        나만 없어 고양이
      </Header>
      <Title>내가 모실 고양이 님은?</Title>
      <LogoImage>
        <img src={LogoImg} alt="main" style={{ width: "100%" }} />
      </LogoImage>

      <Button
        onClick={() => {
          navigate("/question");
        }}
      >
        나에게 와줄 고양이는?
      </Button>
    </Container>
  );
}

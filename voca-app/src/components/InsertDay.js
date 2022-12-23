import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InsertDay() {
  const [days, setDays] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/days").then((response) => {
      setDays(response.data);
    });
  }, []);
  const insertDay = () => {
    axios.post("http://localhost:3000/days", { day: days.length + 1 }).then((response) => {
      //   console.log(response);
      alert("날짜가 추가되었습니다");
      navigate("/");
    });
  };
  return (
    <Wrapper>
      <h2>학습할 날짜를 추가해 주세요</h2>
      <div className="current-day">
        <p>현재 학습에 추가된 날짜는: {days.length} day</p>
      </div>
      <div className="btns">
        <button onClick={insertDay}>날짜 추가하기</button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  h2 {
    font-size: 36px;
    color: #fff;
    margin-bottom: 50px;
  }
  .current-day {
    display: flex;
    justify-content: center;
    p {
      color: #fff;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      font-size: 18px;
    }
  }
  .btns {
    margin-top: 50px;
    button {
      padding: 20px 30px;
      background-color: #f00;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export default InsertDay;

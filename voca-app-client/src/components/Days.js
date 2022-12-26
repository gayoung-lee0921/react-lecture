import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Days() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/days").then((response) => {
      setDays(response.data);
    });
  }, []);
  return (
    <Wrapper>
      <h2>학습할 날짜를 선택하세요</h2>
      <ul>
        {days.map((item, idx) => {
          return (
            <li key={item.id}>
              <Link to={`/day/${item.day}`}>day{item.day}</Link>
            </li>
          );
        })}
      </ul>
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
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #111;
        color: #fff;
        border-radius: 100px;
        padding: 15px 30px;
        text-transform: uppercase;
      }
    }
  }
`;

export default Days;

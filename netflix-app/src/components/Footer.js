import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>All copyrights is mine</p>
    </Container>
  );
}
const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 10px 30px;
    background-color: #fff;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export default Footer;

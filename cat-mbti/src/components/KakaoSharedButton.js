import React, { useEffect } from "react";
import styled from "styled-components";
const { Kakao } = window;

export default function KakaoSharedButton({ data }) {
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(`${process.env.REACT_KAKAO_JAVASCRIPT_KEY}`); // 사용하려는 앱의 JavaScript 키 입력
    }
  }, []);
  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나만 없어 고양이",
        description: `당신에게 맞는 고양이는 ${data.name}입니다. `,
        imageUrl: data.image,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "나도 고양이 집사가 되고 싶다면",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  }

  return <Button onClick={shareMessage}>카카오톡 공유하기</Button>;
}

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

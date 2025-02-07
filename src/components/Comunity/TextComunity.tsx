import React from "react";
import "../../css/copetText.css";

const Comunity = () => {
  return (
    <div className="continer">
      <div className="Textain">
        <img src="/assets/comunity.svg" alt=" " width={430} height={48} />
        <div className="contents">
          <span>
            커뮤니티를 구성해 개인간의 정보 공유 및 소통공간. 커뮤니티내
            키워드를 중심으로 산책알바, 임시보호등의 키워드를 이용으로 편의성
            증가, 보호자간 채팅 서비스를 통해 커뮤니티 활용과 소통해요.
            <br />
            <br />
            <br />
            동물의 현재 상태를 설명하면 해결 방법, 주변 병원을 알려주는 상담사도
            대기중!
          </span>
          <br />
          <br />
          <div className="Aichat">
            AI 챗봇 “귄귄이”
            <img src="/assets/chat.svg" alt=" " width={104} height={105} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunity;

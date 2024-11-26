import React from "react";
import styled from "styled-components";
import KakaoMap from "../Components/Home_Components/KaKaoMap";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){

  return(
    <div>
      <p>첫번째 화면</p>
      <KakaoMap/>
    </div>
  );
}

export default HomePage;
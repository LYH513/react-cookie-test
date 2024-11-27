import React from "react";
import styled from "styled-components";
import KakaoMap from "../Components/Home_Components/KaKaoMap";
import KakaoSearch from "../Components/Home_Components/KaKaoSearch";
import KakaoMapSearch from "../Components/Home_Components/LocationApp";
import LocationApp from "../Components/Home_Components/LocationApp";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){
  
  // console.log(window);

  return(
    <div>
      <p>첫번째 화면</p>
      {/* <KakaoSearch/> */}
      <KakaoMap/>
      <LocationApp/>
    </div>
  );
}

export default HomePage;
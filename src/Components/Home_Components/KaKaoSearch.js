import axios from "axios";
import React, { useEffect } from "react";

function KakaoSearch() {
  // API 키는 실제 발급받은 Kakao REST API 키로 교체해야 합니다.
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAOSEARCH_KEY; 

  // placeSearch 함수
  async function placeSearch() {

    // 음식점 x,y 위경도 기준으로부터 20000미터 반경의 결과 1페이지의 15개
    const url =
      "https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&x=127.106604&y=37.64116&radius=2000&page=1&size=15";
    
    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": `KakaoAK ${KAKAO_API_KEY}`, // KakaoAK 뒤에 실제 API 키를 넣어야 합니다.
        },
      });
  
      console.log(response.data); // 검색된 데이터 콘솔 출력
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }
  

  // 페이지가 로드될 때 자동으로 검색
  useEffect(() => {
    placeSearch();
  }, []);

  return (
    <div>
      <h1>카카오 검색 API 예제</h1>
      <p>검색 결과는 콘솔에 출력됩니다. (개발자 도구에서 확인 가능)</p>
    </div>
  );
}

export default KakaoSearch;

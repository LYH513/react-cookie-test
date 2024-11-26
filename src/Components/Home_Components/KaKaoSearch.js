import React, { useEffect } from "react";

function KakaoSearch() {
  // API 키는 실제 발급받은 Kakao REST API 키로 교체해야 합니다.
  const KAKAO_API_KEY = "82bb82347fb8f527741bb610dbfe61cb"; 

  // placeSearch 함수
  async function placeSearch() {
    let url =
      "https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&query=%EC%82%BC%EC%9C%A1&x=127.106604&y=37.64116&radius=20000";
      
    try {
      const response = await fetch(url, {
        method: "GET", // 요청 방식 GET으로 수정
        headers: new Headers({
          "Authorization": `KakaoAK ${KAKAO_API_KEY}`, // KakaoAK 뒤에 실제 API 키를 넣어야 합니다.
        }),
      });

      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const responseData = await response.json();
      console.log(responseData); // 검색된 데이터 콘솔 출력
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

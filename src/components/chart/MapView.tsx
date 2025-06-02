"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMapBox() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const centerCoords = new window.kakao.maps.LatLng(37.563089, 126.97925); // 다온링크

        const map = new window.kakao.maps.Map(container, {
          center: centerCoords,
          level: 3,
        });

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: centerCoords,
          map: map,
        });

        // 리사이징 시 중심 재설정
        window.addEventListener("resize", () => {
          map.setCenter(centerCoords);
        });
      });
    };

    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
}

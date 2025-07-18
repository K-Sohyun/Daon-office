/* eslint-disable */
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
      const kakao = (window as any).kakao;

      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const centerCoords = new kakao.maps.LatLng(37.563089, 126.97925);

        const map = new kakao.maps.Map(container, {
          center: centerCoords,
          level: 3,
        });

        new kakao.maps.Marker({
          position: centerCoords,
          map: map,
        });

        window.addEventListener("resize", () => {
          map.setCenter(centerCoords);
        });
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "calc(100% - 6rem)" }} />
  );
}

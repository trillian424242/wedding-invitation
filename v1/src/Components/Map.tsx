import React, { useEffect } from "react";
import renderMap from "../hook/mapScript";

export default function Map() {
  useEffect(() => {
    renderMap();
  }, []);
  return (
    <div id='map' style={{
      width: '100vw',
      height: '100vh'
  }}></div>
  )
}
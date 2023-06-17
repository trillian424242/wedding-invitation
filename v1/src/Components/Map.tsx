import React, { useEffect } from "react";
import { Divider } from 'antd';
import styled from 'styled-components';
import renderMap from "../hook/mapScript";

const Wrapper = styled.div`
  background: #efebe9;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

export default function Map() {
  useEffect(() => {
    renderMap();
  }, []);
  return (
    <Wrapper>
      <div id='map' style={{width: '100%', height:'100vmin'}}></div>
    </Wrapper>
  );
}
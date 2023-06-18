import React, { useEffect } from "react";
import { Divider } from 'antd';
import styled from 'styled-components';
import renderMap from "../hook/mapScript";
import Line2 from '../Assets/line2.png';
import Line8 from '../Assets/line8.png';

const Wrapper = styled.div`
  background: #f2fcf5;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: inline-block;
  height: 1em;
  width: auto;
  margin-left: 2px;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

export default function Map() {
  useEffect(() => {
    renderMap();
  }, []);
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <div id='map' style={{width: '100%', height:'100vmin'}}></div>
      <Content>
        <b>지하철</b><br />
        2호선<Image src={Line2} /> 잠실역 8번 출구 약 300m (도보 8분)<br />
        8호선<Image src={Line8} /> 잠실역 9번 출구 약 30m (도보 2분)<br />
        <br />
        <b>버스</b><br />
        간선🔵 301, 302, 303, 320, 341<br />
        지선🟢 2311, 2412, 2415, 3313, 3411, 3412, 4319<br />
        <br />
        <b>주차</b><br />
        교통회관 지상•지하 주차장 이용(2시간 무료주차)<br />
        건물 앞(정문)으로 오시면 안내해 드립니다.<br />
      </Content>
    </Wrapper>
  );
}
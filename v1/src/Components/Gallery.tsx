import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import GalleryPhoto1 from '../Assets/farm_1.jpg';
import GalleryPhoto2 from '../Assets/farm_2.jpg';
import GalleryPhoto3 from '../Assets/farm_3.jpg';
import GalleryPhoto4 from '../Assets/farm_4.jpg';
import GalleryPhoto5 from '../Assets/farm_5.jpg';
import GalleryPhoto6 from '../Assets/farm_6.jpg';
import GalleryPhoto7 from '../Assets/farm_7.jpg';
import GalleryPhoto8 from '../Assets/sea_black and white.jpg';
import GalleryPhoto9 from '../Assets/sea_black and white_2.jpg';
import GalleryPhoto10 from '../Assets/sea_black and white_4.jpg';
import GalleryPhoto11 from '../Assets/sea_black and white_5.jpg';
import GalleryPhoto12 from '../Assets/(vertical)farm_.jpg';
import GalleryPhoto13 from '../Assets/(vertical)farm_8.jpg';
import GalleryPhoto14 from '../Assets/(vertical)farm_9.jpg';
import GalleryPhoto15 from '../Assets/(vertical)sea_black and white_3.jpg';

const Wrapper = styled.div`
  background: #f2fcf5;
  padding: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const images = [
  {
    original: GalleryPhoto1, thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2, thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3, thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4, thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5, thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6, thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7, thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8, thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9, thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10, thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11, thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12, thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13, thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14, thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15, thumbnail: GalleryPhoto15,
  }
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </Wrapper>
  );
};

export default Gallery;

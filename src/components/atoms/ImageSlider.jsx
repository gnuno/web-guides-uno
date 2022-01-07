import React, { useState } from 'react';
import styled from "styled-components";
import Theme from "./Theme";
import Imagen from "./Imagen";

import { ReactComponent as NextArrow } from "../../assets/icons/NextArrow.svg"
import { ReactComponent as BackArrow } from "../../assets/icons/BackArrow.svg"

const Slider = styled.section`
  display: flex;
  align-items: center;
`

const Icon = styled.a`
    * {
        width: 30px;
        height: 30px;
        fill: ${Theme.color.secondary};
    }
    :hover{ cursor: pointer; }
`;

const ImageSlider = ({ paths }) => {
  const [current, setCurrent] = useState(0);
  const length = paths.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(paths) || paths.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <Icon>
        <BackArrow onClick={prevSlide} />
      </Icon>
      {
        paths.map((image, index) => 
            <div
              key={index}>
              {index === current && (
                <Imagen path={image} />
              )}
            </div>
        )
      }
      <Icon>
        <NextArrow onClick={nextSlide} />
      </Icon>
    </Slider>
  );
};

export default ImageSlider;
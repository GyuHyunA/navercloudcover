import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { IMAGES } from "../../assets/images";
import { mainslidedummy } from "../../dummy/dummy";
import Slider from "react-slick";

type Islidetype = {};

const MainSlide = () => {
  return (
    <MainSlideStyle>
      <div className="contents-wrap">
        {mainslidedummy.map((v, i) => (
          <div className="slide-wrap" key={i}>
            <Image src={v.image} alt="" layout="fill" />
            <div className="ms-subtitlewrap">
              <h2 style={{ whiteSpace: "pre" }}>{v.subtext}</h2>
              <Link href="/">
                <a>
                  <Image src={v.button} alt="" width={338} height={52} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MainSlideStyle>
  );
};

export default MainSlide;

const MainSlideStyle = styled.div`
  width: 100vw;
  height: 100vh;
  .contents-wrap {
    width: 100%;
    height: 100%;
    .ms-subtitlewrap {
      position: absolute;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 140px;
    }
  }
`;

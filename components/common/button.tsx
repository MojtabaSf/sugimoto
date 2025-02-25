"use client";

import React from "react";
import styled from "styled-components";

type ButtonType = {
  type: string;
  backgroundColor: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  containerId?: string;
  loadingIcon?: Boolean;
  src?: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
  width?: string;
  height?: string;
  borderRadius?: number;
  border?: string;
  margin?: string;
  color?: string;
  imageMargin?: string;
  fontSize?: number;
  padding?: string;
  buttonType?: any;
  fontFamily?: string;
};

export default function Button({
  children,
  onClick,
  loadingIcon,
  type,
  containerId,
  src,
  width,
  height,
  backgroundColor,
  imgWidth,
  imgHeight,
  border,
  borderRadius,
  margin,
  color,
  imageMargin,
  fontSize,
  padding,
  style,
  buttonType,
  fontFamily,
}: ButtonType) {
  return (
    <ButtonContainer
      onClick={onClick}
      backgroundcolor={backgroundColor}
      width={width}
      height={height}
      border={border}
      borderradius={borderRadius}
      margin={margin}
      color={color}
      imagemargin={imageMargin}
      padding={padding}
      style={style}
      fontSize={fontSize}
      fontFamily={fontFamily}
    >
      <button type={buttonType}>
        {type == "loading" && (
          <div id={containerId}>
            <img
              src={src}
              width={imgWidth}
              height={imgHeight}
              className={!loadingIcon ? "loadingIconOff" : "loadingIconOn"}
              alt=""
            ></img>
            <div className={!loadingIcon ? "loadingTextOn" : "loadingTextOff"}>
              {children}
            </div>
          </div>
        )}
        {type == "normal" && <div id={containerId}>{children}</div>}
      </button>
    </ButtonContainer>
  );
}

type ButtonContainerType = {
  backgroundcolor: string;
  width?: string;
  height?: string;
  border?: string;
  borderradius?: number;
  margin?: string;
  color?: string;
  imagemargin?: string;
  padding?: string;
  fontSize?: number;
  fontFamily?: string;
};

const ButtonContainer = styled.section<ButtonContainerType>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor} !important;
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
  border: ${(props) => props.border} !important;
  border-radius: ${(props) => props.borderradius}px !important;
  margin: ${(props) => props.margin} !important;
  padding: ${(props) => props.padding} !important;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  button {
    width: 100%;
    outline: none;
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 0 !important;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  p {
    font-size: ${(props) => props.fontSize}px !important;
    font-family: ${(props) => props.fontFamily} !important;
    color: ${(props) => props.color} !important;
  }
  span {
    font-size: ${(props) => props.fontSize}px !important;
    font-family: ${(props) => props.fontFamily} !important;
    color: ${(props) => props.color} !important;
  }

  :active {
    outline: none;
    border: none;
  }
  .loadingTextOn {
    display: flex;
  }
  .loadingTextOff {
    display: none;
  }
  .loadingIconOn {
    display: flex;
    animation: rotation 1.5s infinite linear;
    align-items: center;
  }
  .loadingIconOff {
    display: none;
  }
  .answer {
    background: #4285f4 !important;
    border-radius: 8px !important;
    width: 160px !important;
    height: 48px !important;
    font-family: "IRANSans" !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 19px !important;
    line-height: 30px !important;
    text-align: center !important;
    color: #ffffff !important;
  }

  .imageMode {
    img {
      margin: 0 0 0 10px;
    }
  }

  @media only screen and (max-width: 500px) {
    img {
      // width: 25px !important;
      // height: 25px !important;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

"use client";

import { SetStateAction } from "react";
import styled from "styled-components";
import Image from "next/image";

type ModalType = {
  openModal: string;
  setOpenModal: SetStateAction<any>;
  maxWidth: number;
  maxwidthmobile?: number;
  alignItems: string;
  closeAlignment: string;
  padding?: string;
  children: React.ReactNode;
  callBack?: () => void;
};

export default function Modal({
  openModal,
  setOpenModal,
  maxWidth,
  alignItems,
  closeAlignment,
  padding,
  children,
  maxwidthmobile,
  callBack,
}: ModalType) {
  function CloseModal() {
    if (callBack) {
      callBack();
    }
    setOpenModal("false");
  }

  return (
    <Container
      openmodal={openModal}
      maxwidth={maxWidth}
      alignitems={alignItems}
      closealignment={closeAlignment}
      padding={padding}
      maxwidthmobile={maxwidthmobile}
    >
      <div className="main">
        <Image
          src="/icons/x-close.svg"
          width={20}
          height={20}
          alt=""
          onClick={CloseModal}
        />
        {children}
      </div>
      <div className="modalShadow" onClick={CloseModal}></div>
    </Container>
  );
}

type ContainerType = {
  openmodal: string;
  maxwidth: number;
  maxwidthmobile?: number;
  alignitems: string;
  closealignment: string;
  padding?: string;
};

const Container = styled.section<ContainerType>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ openmodal }) => (openmodal == "true" ? "1" : "0")};
  z-index: ${({ openmodal }) => (openmodal == "true" ? "9999" : "-1")};

  form {
    width: 100%;
  }

  .main {
    width: 93%;
    max-width: ${({ maxwidth }) => maxwidth}px;
    display: flex;
    flex-direction: column;
    align-items: ${({ alignitems }) => alignitems};
    justify-content: flex-start;
    background-color: white;
    border-radius: 12px;
    padding: ${({ padding }) => padding};
    position: absolute;
    z-index: 9999;

    > img {
      cursor: pointer;
      align-self: ${({ closealignment }) => closealignment};
    }
  }

  .modalShadow {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .main {
      max-width: ${({ maxwidthmobile }) => maxwidthmobile}px;
    }
  }
`;

"use client";

import React, { SetStateAction } from "react";
import styled from "styled-components";

type SelectorType = {
  inputKey: string;
  list: any[];
  index?: number | string;
  label?: string;
  obj?: any;
  setObj?: SetStateAction<any>;
  flex?: string;
  align?: string;
  blankedOption?: boolean;
  blankedValue?: string | number;
  valueType?: string;
  margin?: string;
};

export default function Selector({
  index,
  obj,
  setObj,
  flex,
  align,
  blankedOption,
  blankedValue,
  list,
  valueType,
  margin,
  label,
  inputKey,
}: SelectorType) {
  return (
    <Container index={index} flex={flex} align={align} margin={margin}>
      {label && <label className="title">{label}</label>}
      <select
        className="select"
        onChange={(e) => {
          setObj({
            ...obj,
            [inputKey]:
              valueType == "number"
                ? +e.currentTarget.value
                : valueType == "boolean"
                ? JSON.parse(e.currentTarget.value)
                : e.currentTarget.value,
          });
        }}
        value={obj?.[inputKey]}
      >
        {blankedOption && <option value={blankedValue}></option>}
        {list?.map((val: any, index: number) => (
          <option key={index} value={val?.value}>
            {val?.title}
          </option>
        ))}
      </select>
    </Container>
  );
}

type ContainerType = {
  index?: number | string;
  flex?: string;
  align?: string;
  margin?: string;
};

const Container = styled.div<ContainerType>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flex }) => (flex ? flex : "row")};
  justify-content: flex-end;
  align-items: ${({ align }) => (align ? align : "center")};
  margin: ${({ index, dir, margin }) =>
    index === "even" && dir === "ltr"
      ? "0 20px 10px 0"
      : index === "even" && dir === "rtl"
      ? "0 0 10px 20px"
      : margin
      ? margin
      : "0 0 15px 0"};

  .select {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-family: YekanBakhLight;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-image: url(/icons/bold-arrow.svg);
    background-repeat: no-repeat;
    background-position: ${({ dir }) => (dir === "ltr" ? "96.5%" : "3.5%")};
    margin: ${({ flex, dir }) =>
      flex ? "5px 0 0 0" : dir === "ltr" ? "0 0 0 15px" : "0 15px 0 0"};
    outline: none;
    appearance: none;
    cursor: pointer;
  }

  .title {
    color: black;
    font-size: 1rem !important;
    font-family: YekanBakhSemiBold;
    display: flex;
    justify-content: end;
    text-align: right;
    margin: 0 0 5px 0;
  }

  select:focus {
    border: 1px solid rgba(128, 189, 255, 1) !important;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    .select {
      margin: 5px 0 0 0;
    }
  }
`;

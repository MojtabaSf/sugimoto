"use client";

import React, { createContext, SetStateAction } from "react";
import useCommonContext from "./common-context";

type CommonContextype = {
  openModal: string;
  setOpenModal: SetStateAction<any>;
  filterModal: string;
  setFilterModal: SetStateAction<any>;
};

const CommonContext = createContext<CommonContextype>({
  openModal: "false",
  setOpenModal: () => {},
  filterModal: "false",
  setFilterModal: () => {},
});
const { Provider } = CommonContext;

const CommonContextProvider: (props: any) => any = ({ children }: any) => {
  const main = useCommonContext();
  const commonProvider: any = { ...main };

  return <Provider value={commonProvider}>{children}</Provider>;
};

export { CommonContextProvider };

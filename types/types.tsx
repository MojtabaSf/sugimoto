"use strict";

import { SetStateAction } from "react";

export type cardType = {
  id: number;
  name: string;
  src: string;
  desc: string;
  price: string;
  alt: string;
  color: string;
  size: number;
};

export type ProductModalType = {
  item: any;
  openModal: string;
  setOpenModal: SetStateAction<any>;
};

export type FiltersModalType = {
  filterObj: { color: string; size: number };
  openModal: string;
  setOpenModal: SetStateAction<any>;
  setFilterObj: SetStateAction<any>;
};

export type ProductCardType = {
  item: any;
  ShowItemDetails: (x: cardType) => void;
};

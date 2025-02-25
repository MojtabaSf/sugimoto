"use client";

import { useState } from "react";

export default function useCommonContext() {
  const [openModal, setOpenModal] = useState<string>("false");
  const [filterModal, setFilterModal] = useState<string>("false");

  return {
    openModal,
    setOpenModal,
    filterModal,
    setFilterModal,
  };
}

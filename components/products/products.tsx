"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cardType } from "@/types/types";
import { productsList } from "@/objects/objects";
import useCommonContext from "@/context/common-context";

import ProductCard from "./card/card";
import ProductModal from "./product-modal/product-modal";
import style from "./product.module.css";
import Button from "../common/button";
import FiltersModal from "./filters-modal/filters-modal";

export default function Products() {
  const { openModal, setOpenModal, filterModal, setFilterModal } =
    useCommonContext();
  const [selectedItem, setSelectedItem] = useState<cardType>();
  const [filtersObj, setFiltersObj] = useState<{ color: string; size: number }>(
    { color: "", size: 0 }
  );
  const [data, setData] = useState<cardType[]>(productsList);

  // sets details of clicked product:
  function ShowItemDetails(item: cardType) {
    setSelectedItem(item);
    setOpenModal("true");
  }

  // filters list of products:
  useEffect(() => {
    if (filtersObj.color == "" && filtersObj.size == 0) {
      setData(productsList);
    } else if (filtersObj.color != "" && filtersObj.size == 0) {
      setData(
        productsList.filter((x: cardType) => x.color == filtersObj.color)
      );
    } else if (filtersObj.color == "" && filtersObj.size != 0) {
      setData(productsList.filter((x: cardType) => x.size == filtersObj.size));
    } else {
      setData(
        productsList.filter(
          (x: cardType) =>
            x.size == filtersObj.size && x.color == filtersObj.color
        )
      );
    }
  }, [filtersObj]);

  return (
    <section className={style.container}>
      <ProductModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        item={selectedItem}
      />
      <FiltersModal
        filterObj={filtersObj}
        openModal={filterModal}
        setOpenModal={setFilterModal}
        setFilterObj={setFiltersObj}
      />
      <Button
        backgroundColor="white"
        color="black"
        type="normal"
        border="1px solid gray"
        borderRadius={4}
        fontFamily="YekanBakhSemiBold"
        fontSize={16}
        padding="8px"
        margin="0 0 16px 4px"
        onClick={() => setFilterModal("true")}
      >
        <Image src="/icons/filter.svg" width={20} height={20} alt="sugimoto" />
        <span>فیلترها</span>
      </Button>
      <div className={style.cardsContainer}>
        {data?.map((val: cardType) => (
          <ProductCard
            item={val}
            key={val.id}
            ShowItemDetails={ShowItemDetails}
          />
        ))}
      </div>
    </section>
  );
}

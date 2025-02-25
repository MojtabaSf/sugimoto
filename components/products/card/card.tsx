"use client";

import style from "./card.module.css";
import Image from "next/image";
import { ProductCardType } from "@/types/types";

export default function ProductCard({
  item,
  ShowItemDetails,
}: ProductCardType) {
  return (
    <section className={style.container} onClick={() => ShowItemDetails(item)}>
      {item && (
        <Image
          src={item?.src}
          width={200}
          height={150}
          alt={item?.alt}
          quality={100}
        />
      )}
      <div>
        <p>{item.name}</p>
        <span>{item.price} تومان</span>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Modal from "@/components/common/modal";
import style from "./product-modal.module.css";
import { ProductModalType } from "@/types/types";

export default function ProductModal({
  item,
  openModal,
  setOpenModal,
}: ProductModalType) {
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      maxWidth={400}
      alignItems="center"
      closeAlignment="flex-end"
      padding="16px"
    >
      <section className={style.container}>
        {item && (
          <Image src={item?.src} width={300} height={200} alt={item?.alt} />
        )}
        <div className={style.detailsContainer}>
          <div className={style.eachRow}>
            <span>نام:</span>
            <p>{item?.name}</p>
          </div>
          <div className={style.eachRow}>
            <span>قیمت:</span>
            <p>{item?.price}</p>
          </div>
          <div className={style.eachRow}>
            <span>رنگ:</span>
            <p>{item?.color}</p>
          </div>
          <div className={style.eachRow}>
            <span>اندازه:</span>
            <p>{item?.size}</p>
          </div>
          <div className={style.lastRow}>
            <span>توضیحات:</span>
            <p>{item?.desc}</p>
          </div>
        </div>
      </section>
    </Modal>
  );
}

"use client";

import Modal from "@/components/common/modal";
import style from "./filters-modal.module.css";
import { FiltersModalType } from "@/types/types";
import Selector from "@/components/common/selector";

export default function FiltersModal({
  filterObj,
  setFilterObj,
  openModal,
  setOpenModal,
}: FiltersModalType) {
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      maxWidth={500}
      alignItems="center"
      closeAlignment="flex-end"
      padding="16px"
    >
      <section className={style.container}>
        <Selector
          obj={filterObj}
          setObj={setFilterObj}
          flex="column"
          align="flex-start"
          inputKey="color"
          list={[
            {
              id: 1,
              title: "قرمز",
              value: "قرمز",
            },
            {
              id: 2,
              title: "آبی",
              value: "آبی",
            },
            {
              id: 2,
              title: "زرد",
              value: "زرد",
            },
          ]}
          valueType="string"
          label="رنگ"
          blankedOption={true}
          blankedValue={""}
        />
        <Selector
          inputKey="size"
          obj={filterObj}
          setObj={setFilterObj}
          flex="column"
          align="flex-start"
          list={[
            { id: 1, title: "1", value: 1 },
            { id: 2, title: "2", value: 2 },
            { id: 3, title: "3", value: 3 },
          ]}
          valueType="boolean"
          label="سایز"
          blankedOption={true}
          blankedValue={0}
        />
      </section>
    </Modal>
  );
}

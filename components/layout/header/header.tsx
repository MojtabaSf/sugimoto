import Image from "next/image";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.main}>
        <Image
          src="/sugimoto-white.webp"
          width={280}
          height={48}
          alt="sugimotovisa"
        />
      </div>
    </header>
  );
}

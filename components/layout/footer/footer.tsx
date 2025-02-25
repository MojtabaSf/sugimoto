import Image from "next/image";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.main}>
        <p>کلیه حقوق این وبسایت متعلق به شرکت سوگیموتو می‌باشد.</p>
        <Image
          src="/sugimotovisa.webp"
          width={280}
          height={48}
          alt="sugimotovisa"
        />
      </div>
    </footer>
  );
}

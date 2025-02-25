import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

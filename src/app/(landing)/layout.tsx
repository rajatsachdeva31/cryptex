import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="w-full relative">{children}</main>
      <Footer />
    </>
  );
}

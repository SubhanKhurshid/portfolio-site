import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

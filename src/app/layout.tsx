import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Website Komoditas Indonesia",
  description: "Website untuk monitoring harga pangan indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

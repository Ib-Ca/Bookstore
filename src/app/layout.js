import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/navs/topNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Library",
  description: "Libreria e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
     <TopNav/>
        {children}</body>
    </html>
  );
}

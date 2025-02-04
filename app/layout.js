import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Hockey Team",
  description: "Professional Hockey Team Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} font-bebas antialiased bg-black relative`}
        >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

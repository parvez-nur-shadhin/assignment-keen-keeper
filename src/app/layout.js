import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContextProvider from "./Components/Context/ContextProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KinKeeper",
  description: "Created By Parvez Nur Shadhin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ContextProvider>
          <Navbar />
          <main className="min-h-full flex flex-col">{children}<ToastContainer /></main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

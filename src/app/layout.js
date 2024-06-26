import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css'; 
import '@fortawesome/fontawesome-free/css/brands.css';
import Header from "@/app/_components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emmanuel Pedroza's Personal Website",
  description: "This is my personal website",
  ogImage: "/bike/gallery_10.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl items-center mx-auto p-8 md:p-12">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}

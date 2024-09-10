import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Spinner from "./loading";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-700">
          <Header />
          <div className="flex-grow">
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

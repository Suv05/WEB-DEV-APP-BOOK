import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-700">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

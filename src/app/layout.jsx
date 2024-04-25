import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <div className="min-h-screen flex flex-col ">
            <Navbar />
            {children}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
              <p>Copyright © 2024 - All right reserved by Amz</p>
            </footer>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}

import "./globals.css";
import CartProvider from "../components/CartProvider";
import Header from "../components/Header";
import { SITE } from "../lib/products";

export const metadata = { title: "Retroway", description: "Retroway clothing from Dhanmondi, Dhaka. Hoodies and sweatshirts." };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <footer><div className="wrap"><span>© 2026 {SITE.name}. All rights reserved.</span><span>{SITE.tagline}</span></div></footer>
        </CartProvider>
      </body>
    </html>
  );
}

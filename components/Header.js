"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { count } = useCart();
  return (
    <header>
      <div className="wrap">
        <Link className="logo" href="/">Retroway</Link>
        <nav aria-label="Main">
          <Link href="/#shop">Shop</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/cart">Cart ({count})</Link>
        </nav>
      </div>
    </header>
  );
}

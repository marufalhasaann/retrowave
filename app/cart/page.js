"use client";
import Link from "next/link";
import { products, SITE } from "../../lib/products";
import { useCart } from "../../components/CartProvider";

export default function CartPage() {
  const { items, setQty, clear } = useCart();
  const rows = Object.entries(items)
    .map(([key, qty]) => {
      const [id, size] = key.split("|");
      const p = products.find((x) => x.id === id);
      return p && { key, p, size, qty };
    })
    .filter(Boolean);
  const total = rows.reduce((s, r) => s + r.p.price * r.qty, 0);
  const msg = encodeURIComponent(
    "Hi Retroway, I want to order:\n" +
      rows.map((r) => `- ${r.p.name} (${r.size}) x${r.qty} = ৳${r.p.price * r.qty}`).join("\n") +
      `\nTotal: ৳${total}`
  );

  return (
    <main><section><div className="wrap">
      <h2>Your cart</h2>
      {rows.length === 0 ? (
        <p className="lead">Your cart is empty. <Link href="/#shop" style={{ color: "var(--accent)" }}>Browse the shop</Link></p>
      ) : (
        <>
          <div className="rows">
            {rows.map((r) => (
              <div className="row" key={r.key}>
                <strong>{r.p.name} <small>({r.size})</small></strong>
                <span>৳{r.p.price.toLocaleString("en-US")}</span>
                <span className="qty">
                  <button aria-label="Decrease" onClick={() => setQty(r.key, r.qty - 1)}>−</button>
                  {r.qty}
                  <button aria-label="Increase" onClick={() => setQty(r.key, r.qty + 1)}>+</button>
                </span>
                <span>৳{(r.p.price * r.qty).toLocaleString("en-US")}</span>
              </div>
            ))}
          </div>
          <p className="total">Total: ৳{total.toLocaleString("en-US")}</p>
          <a className="btn" href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}>Order on WhatsApp</a>{" "}
          <button className="btn ghost" onClick={clear}>Clear cart</button>
        </>
      )}
    </div></section></main>
  );
}

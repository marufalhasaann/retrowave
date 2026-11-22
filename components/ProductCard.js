"use client";
import { useState } from "react";
import { SIZES } from "../lib/products";
import { useCart } from "./CartProvider";

export default function ProductCard({ p }) {
  const { add } = useCart();
  const [i, setI] = useState(0);
  const [size, setSize] = useState("L");
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(`${p.id}|${size}`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="card">
      <img className="main" src={p.images[i]} alt={`${p.name}, ${p.color}`} loading="lazy" />
      <div className="thumbs">
        {p.images.map((src, n) => (
          <button key={src} onClick={() => setI(n)} aria-label={`Photo ${n + 1}`} className={n === i ? "on" : ""}>
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <h3>{p.name}</h3>
      <p className="meta">{p.color}</p>
      <p className="note">{p.note}</p>
      <div className="price">৳{p.price.toLocaleString("en-US")}</div>
      <div className="sizes" role="group" aria-label="Size">
        {SIZES.map((s) => (
          <button key={s} className={s === size ? "on" : ""} onClick={() => setSize(s)}>{s}</button>
        ))}
      </div>
      <button className="btn" onClick={onAdd}>{added ? "Added" : "Add to cart"}</button>
    </article>
  );
}

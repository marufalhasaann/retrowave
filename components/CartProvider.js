"use client";
import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);

// Cart keys look like "id|size", for example "prohibited|L".
export default function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("cart") || "{}")); } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem("cart", JSON.stringify(items)); } catch {}
  }, [items, ready]);

  const add = (key) => setItems((i) => ({ ...i, [key]: (i[key] || 0) + 1 }));
  const setQty = (key, q) =>
    setItems((i) => {
      const n = { ...i };
      if (q <= 0) delete n[key]; else n[key] = q;
      return n;
    });
  const clear = () => setItems({});
  const count = Object.values(items).reduce((a, b) => a + b, 0);

  return <Ctx.Provider value={{ items, add, setQty, clear, count }}>{children}</Ctx.Provider>;
}

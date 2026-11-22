import ProductCard from "../components/ProductCard";
import { products, SITE } from "../lib/products";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Hoodies and sweatshirts with something to say.</h1>
            <p className="lead">{SITE.tagline} Made in Dhaka, worn everywhere.</p>
            <a className="btn" href="#shop">Shop the collection</a>
          </div>
          <img src="/images/colorblock-2.jpg" alt="Two models in cream and brown Retroway hoodies" />
        </div>
      </section>

      <section id="shop">
        <div className="wrap">
          <h2>Shop</h2>
          <div className="grid">{products.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section id="about" className="alt">
        <div className="wrap narrow">
          <h2>About Retroway</h2>
          <p>Retroway is a clothing brand based in Dhanmondi, Dhaka. We make hoodies and sweatshirts with strong prints, clean colors, and a relaxed oversized fit.</p>
        </div>
      </section>

      <section id="contact">
        <div className="wrap narrow">
          <h2>Contact</h2>
          <p className="lead">Ask about sizes, orders, or delivery.</p>
          <div className="contact">
            <a href={`tel:+${SITE.whatsapp}`}>Call {SITE.phone}</a>
            <a href={`https://wa.me/${SITE.whatsapp}`}>Message on WhatsApp</a>
            {SITE.email && <a href={`mailto:${SITE.email}`}>{SITE.email}</a>}
            <a href={`https://instagram.com/${SITE.instagram}`}>Instagram @{SITE.instagram}</a>
            <span>{SITE.address}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

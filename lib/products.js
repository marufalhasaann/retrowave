// Edit everything here: contact details, prices (BDT), sizes, photos.
export const SITE = {
  name: "Retroway",
  tagline: "Bringing excellence to life.",
  phone: "01620-035355",
  whatsapp: "8801620035355",
  email: "", // add your email here, e.g. "hello@retroway.com"
  instagram: "retro_wayy",
  address: "Dhanmondi, Dhaka 1209",
};
export const SIZES = ["M", "L", "XL"];
const img = (n, c) => Array.from({ length: c }, (_, i) => `/images/${n}-${i + 1}.jpg`);
export const products = [
  { id: "resistance", name: "Resistance Sweatshirt", color: "Red", price: 1850, note: "Bold chest print and printed sleeve text. Oversized fit.", images: img("resistance", 3) },
  { id: "prohibited", name: "Prohibited Hoodie", color: "Mocha", price: 2200, note: "Small Retroway print on the front, big Prohibited print on the back.", images: img("prohibited", 5) },
  { id: "levitation", name: "Levitation Sweatshirt", color: "White", price: 1850, note: "Green rib collar and the line “You only live once.”", images: img("levitation", 3) },
  { id: "colorblock", name: "Colorblock Hoodie", color: "Cream & Brown", price: 2400, note: "Cream body with brown panels and tan side stripes.", images: img("colorblock", 4) },
];

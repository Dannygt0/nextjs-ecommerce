import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Havit HV-G69 USB Gamepad",
    description: "Experience next-level gaming with the Havit HV-G69 USB Gamepad. Features ergonomic design, precise joysticks, and dual-vibration feedback for immersive gameplay.",
    rating: 4.5,
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: [
        "/images/products/product-1-bg-1.png",
        "/images/products/product-1-bg-2.png",
      ],
    },
  },
  {
    title: "iPhone 14 Plus , 6/128GB",
    description: "The iPhone 14 Plus features a supersized Super Retina XDR display, advanced camera system for better low-light photos, and all-day battery life.",
    rating: 4.8,
    reviews: 5,
    price: 899.0,
    discountedPrice: 99.0, // ¡Qué ofertón!
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: [
        "/images/products/product-2-bg-1.png",
        "/images/products/product-2-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iMac M1 24-inch 2021",
    description: "Brilliant 24-inch 4.5K Retina display. Powered by the Apple M1 chip for stellar performance. Incredibly thin design in vibrant colors.",
    rating: 4.9,
    reviews: 5,
    price: 59.0,
    discountedPrice: 29.0,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: [
        "/images/products/product-3-bg-1.png",
        "/images/products/product-3-bg-2.png",
      ],
    },
  },
  {
    title: "MacBook Air M1 chip, 8/256GB",
    description: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster.",
    rating: 4.7,
    reviews: 6,
    price: 59.0,
    discountedPrice: 29.0,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-4-sm-1.png",
        "/images/products/product-4-sm-2.png",
      ],
      previews: [
        "/images/products/product-4-bg-1.png",
        "/images/products/product-4-bg-2.png",
      ],
    },
  },
  {
    title: "Apple Watch Ultra",
    description: "The most rugged and capable Apple Watch ever, designed for exploration, adventure, and endurance. With a 49mm aerospace-grade titanium case.",
    rating: 5.0,
    reviews: 3,
    price: 99.0,
    discountedPrice: 29.0,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-5-sm-1.png",
        "/images/products/product-5-sm-2.png",
      ],
      previews: [
        "/images/products/product-5-bg-1.png",
        "/images/products/product-5-bg-2.png",
      ],
    },
  },
  {
    title: "Logitech MX Master 3 Mouse",
    description: "Ultrafast magspeed scrolling - remarkable speed, precision & quietness of electromagnetic scrolling with all-new magspeed wheel.",
    rating: 4.8,
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/products/product-6-sm-1.png",
        "/images/products/product-6-sm-2.png",
      ],
      previews: [
        "/images/products/product-6-bg-1.png",
        "/images/products/product-6-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iPad Air 5th Gen - 64GB",
    description: "Supercharged by the Apple M1 chip. 10.9-inch Liquid Retina display with True Tone, P3 wide color, and an antireflective coating.",
    rating: 4.6,
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/products/product-7-sm-1.png",
        "/images/products/product-7-sm-2.png",
      ],
      previews: [
        "/images/products/product-7-bg-1.png",
        "/images/products/product-7-bg-2.png",
      ],
    },
  },
  {
    title: "Asus RT Dual Band Router",
    description: "Dual-band WiFi 6 (802.11ax) router with MU-MIMO and OFDMA technology for better efficiency and throughput. Perfect for high-speed gaming.",
    rating: 4.3,
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/products/product-8-sm-1.png",
        "/images/products/product-8-sm-2.png",
      ],
      previews: [
        "/images/products/product-8-bg-1.png",
        "/images/products/product-8-bg-2.png",
      ],
    },
  },
  {
    title: "Iphone 17 ProMax",
    description: "The future of smartphones. Features a revolutionary edge-to-edge holographic display, advanced AI integration, and a titanium build.",
    rating: 4.9,
    reviews: 15,
    price: 1300.0,
    discountedPrice: 1199.99,
    id: 9,
    imgs: {
      thumbnails: [
        "/images/products/product-9-bg-1.png",
        "/images/products/product-9-bg-2.png",
      ],
      previews: [
        "/images/products/product-9-bg-1.png",
        "/images/products/product-9-bg-2.png",
      ],
    },
  },
  {
    title: "Galaxy S26 Ultra 5G",
    description: "Unleash your creativity with the integrated S-Pen, quad-camera setup with 200x space zoom, and a massive battery that lasts days.",
    rating: 4.8,
    reviews: 16,
    price: 1300.0,
    discountedPrice: 1199.99,
    id: 10,
    imgs: {
      thumbnails: [
        "/images/products/product-10-bg-1.png",
        "/images/products/product-10-bg-2.webp",
      ],
      previews: [
        "/images/products/product-10-bg-1.png",
        "/images/products/product-10-bg-2.webp",
      ],
    },
  },
];

export default shopData;
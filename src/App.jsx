import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Menu", "Services", "Portfolio", "Contact"];

const DISHES = [
  {
    name: "Saffron Lobster Bisque",
    desc: "Velvety saffron broth with herb oil and caviar pearls.",
    price: "₹1,850",
    tag: "Chef's Signature",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
  },
  {
    name: "Wagyu Tenderloin A5",
    desc: "Truffle jus, pomme purée and charred seasonal greens.",
    price: "₹3,450",
    tag: "Most Loved",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=80",
  },
  {
    name: "Black Truffle Risotto",
    desc: "Aged parmesan, wild mushrooms and delicate truffle finish.",
    price: "₹1,450",
    tag: "Vegetarian",
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=80",
  },
  {
    name: "Miso Glazed Sea Bass",
    desc: "Yuzu foam, dashi broth and crisp pickled radish.",
    price: "₹2,150",
    tag: "Seasonal",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80",
  },
  {
    name: "Smoked Lamb Chops",
    desc: "Herb crusted chops with roasted garlic jus.",
    price: "₹2,650",
    tag: "Premium",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80",
  },
  {
    name: "Signature Pasta",
    desc: "Handmade pasta with creamy parmesan and basil.",
    price: "₹1,250",
    tag: "Classic",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&q=80",
  },
  {
    name: "Royal Dessert Platter",
    desc: "A luxury collection of artisan desserts.",
    price: "₹1,150",
    tag: "Sweet Finish",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&q=80",
  },
  {
    name: "Flame Grilled Salmon",
    desc: "Fresh salmon glazed with citrus butter and herbs.",
    price: "₹2,250",
    tag: "Fresh Catch",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80",
  },
];

const FEATURES = [
  {
    icon: "✦",
    title: "Refined Ingredients",
    desc: "Every ingredient is selected with precision for flavour, freshness and elegance.",
  },
  {
    icon: "✧",
    title: "Curated Experience",
    desc: "Every course, every light and every texture is designed to feel unforgettable.",
  },
  {
    icon: "◈",
    title: "Modern Ambience",
    desc: "A contemporary setting with soft luxury, intimacy and calm sophistication.",
  },
  {
    icon: "✺",
    title: "Signature Service",
    desc: "Warm hospitality with a seamless guest journey from arrival to farewell.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    role: "Food Critic",
    quote:
      "One of the most elegant dining spaces I’ve experienced — elevated, graceful and unforgettable.",
  },
  {
    name: "Aarav Shah",
    role: "Entrepreneur",
    quote:
      "The ambience alone feels premium, but the food and service take it to another level entirely.",
  },
  {
    name: "Naina Kapoor",
    role: "Travel Creator",
    quote:
      "A modern luxury restaurant that feels both exclusive and incredibly welcoming.",
  },
];

const SERVICES = [
  {
    icon: "🍽️",
    title: "Fine Dining",
    desc: "An elevated tasting journey designed around seasonal ingredients and elegant plating.",
  },
  {
    icon: "🥂",
    title: "Private Events",
    desc: "Bespoke dining experiences for celebrations, anniversaries and intimate gatherings.",
  },
  {
    icon: "🎉",
    title: "Corporate Dining",
    desc: "Premium event hosting and curated executive dining in a refined environment.",
  },
  {
    icon: "📅",
    title: "Reservations",
    desc: "Simple booking with personalised arrangements for your special evening.",
  },
];

const PORTFOLIO_ITEMS = [
  {
    category: "Food",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    title: "Signature Table",
  },
  {
    category: "Interior",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
    title: "Main Hall",
  },
  {
    category: "Food",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    title: "Dessert Story",
  },
  {
    category: "Events",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    title: "Private Celebration",
  },
  {
    category: "Interior",
    img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80",
    title: "Wine Lounge",
  },
  {
    category: "Food",
    img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=900&q=80",
    title: "Chef’s Garden",
  },
];

const TIMELINE = [
  {
    year: "2008",
    title: "Aurum Opens",
    desc: "A vision of elevated dining begins with a boutique fine-dining concept.",
  },
  {
    year: "2013",
    title: "Signature Menu Launch",
    desc: "Aurum introduces its first acclaimed tasting menu and seasonal curation.",
  },
  {
    year: "2018",
    title: "Interior Redesign",
    desc: "The restaurant evolves into a modern luxury destination with a refined new atmosphere.",
  },
  {
    year: "2026",
    title: "Premium Brand Refresh",
    desc: "Aurum enters a new era of modern elegance and elevated hospitality.",
  },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function SectionTag({ text }) {
  return (
    <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
      {text}
    </p>
  );
}

function AccentLine() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
      <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
      <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
    </div>
  );
}

function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-7 py-3 rounded-full bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-semibold tracking-[0.16em] uppercase text-[0.72rem] hover:scale-[1.04] transition-all duration-300 shadow-lg shadow-[#d4a373]/30"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-7 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[#f3f4f6] font-semibold tracking-[0.16em] uppercase text-[0.72rem] hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar({ activePage, setActivePage, cartCount, setCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-[#0b1220]/90 border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30"
            : "bg-[#0b1220]/60 border-white/10 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <button
            onClick={() => setActivePage("Home")}
            className="text-[#f8f4ef] font-black tracking-[0.28em] text-sm md:text-base"
          >
            AURUM<span className="text-[#d4a373]"> DINING</span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActivePage(item)}
                  className={`text-[0.74rem] uppercase tracking-[0.22em] transition-all duration-300 ${
                    activePage === item
                      ? "text-[#f8f4ef]"
                      : "text-[#c0c7d1] hover:text-white"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-[#eef2f7] text-[0.68rem] uppercase tracking-[0.18em] hover:bg-white/15 transition-all duration-300"
            >
              Cart ({cartCount})
            </button>
            <button
              onClick={() => setActivePage("Contact")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] text-[0.68rem] uppercase tracking-[0.18em] font-semibold hover:scale-[1.03] transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          <button
            className="md:hidden text-[#eef2f7] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActivePage(item);
                  setMenuOpen(false);
                }}
                className="text-left text-[#d8dee6] uppercase tracking-[0.18em] text-sm"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
              }}
              className="text-left text-[#d4a373] uppercase tracking-[0.18em] text-sm font-semibold"
            >
              Cart ({cartCount})
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HOME
───────────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#07111d] text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85"
            alt="Luxury restaurant"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,163,115,0.22),_transparent_30%),linear-gradient(to_bottom,_rgba(7,17,29,0.35),_rgba(7,17,29,0.96))]" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag text="Boutique Luxury Dining" />
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#f8f4ef]">
              Where
              <br />
              <span className="text-[#d4a373]">Taste</span>
              <br />
              Meets Art
            </h1>

            <p className="mt-8 text-[#c9d1da] max-w-xl leading-relaxed text-lg">
              A premium restaurant experience crafted with elegant interiors,
              curated flavours, signature plating and refined hospitality.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <PrimaryButton onClick={() => setActivePage("Contact")}>
                Reserve Now
              </PrimaryButton>
              <SecondaryButton onClick={() => setActivePage("Menu")}>
                Explore Menu
              </SecondaryButton>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-14 max-w-xl">
              {[
                ["15+", "Years"],
                ["4.9", "Guest Rating"],
                ["24/7", "Reservations"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
                >
                  <p className="text-2xl md:text-3xl font-black text-[#f8f4ef]">
                    {num}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9faab6] mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85"
                alt="Dining setup"
                className="w-full h-[620px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-6 bg-[#f8f4ef] text-[#111827] rounded-[2rem] p-6 shadow-2xl w-64">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#8b5e34] mb-2">
                Signature Ambience
              </p>
              <p className="text-xl font-bold leading-snug">
                Elegant interiors designed to feel timeless and exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionTag text="Why Aurum" />
            <h2 className="text-4xl md:text-5xl font-black text-[#f8f4ef]">
              Crafted For Experience
            </h2>
            <AccentLine />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {FEATURES.map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] p-8 border border-white/10 bg-gradient-to-b from-white/8 to-white/4 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl text-[#d4a373] mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#f8f4ef] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#b8c2cd] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-2xl p-10 md:p-16">
          <SectionTag text="Guest Review" />
          <h2 className="text-4xl md:text-5xl font-black text-[#f8f4ef]">
            What Guests Feel
          </h2>
          <AccentLine />

          <p className="text-2xl md:text-3xl leading-relaxed text-[#f1ebe3] mt-8 font-light">
            “{TESTIMONIALS[activeTestimonial].quote}”
          </p>

          <div className="mt-10">
            <p className="text-lg font-bold text-[#f8f4ef]">
              {TESTIMONIALS[activeTestimonial].name}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-[#9eabb8] mt-2">
              {TESTIMONIALS[activeTestimonial].role}
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeTestimonial
                    ? "w-10 bg-[#d4a373]"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function About() {
  return (
    <div className="bg-[#07111d] text-white pt-32">
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionTag text="Our Story" />
          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef] leading-[1.02]">
            Built With
            <br />
            <span className="text-[#d4a373]">Taste</span> &
            <br />
            Intention
          </h2>
          <AccentLine />
          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-8">
            Aurum is designed as a contemporary luxury dining destination where
            every detail matters — from atmosphere and plating to service and
            storytelling.
          </p>
          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-5">
            It is not just a restaurant concept. It is a polished experience
            created to feel elegant, calm, immersive and memorable.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=85"
            alt="Restaurant interior"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=85"
            alt="Chef"
            className="w-full h-[540px] object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionTag text="Meet Our Chef" />
          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef] leading-[1.02]">
            Chef
            <br />
            <span className="text-[#d4a373]">Adrian</span> Laurent
          </h2>
          <AccentLine />
          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-8">
            With over 18 years of international culinary experience, Chef Adrian
            Laurent brings together artistic plating, modern European techniques,
            and elevated fine-dining storytelling.
          </p>
          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-5">
            His philosophy is simple: every dish should feel luxurious, memorable,
            and emotionally connected to the guest experience.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-[#f8f4ef]">18+</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#9faab6] mt-2">
                Years Experience
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-[#f8f4ef]">12</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#9faab6] mt-2">
                Signature Menus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0c1726]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionTag text="Growth Journey" />
            <h2 className="text-4xl md:text-5xl font-black text-[#f8f4ef]">
              Timeline
            </h2>
            <AccentLine />
          </div>

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] p-7 md:p-8 border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <p className="text-[#d4a373] text-sm uppercase tracking-[0.25em] mb-2 font-bold">
                  {item.year}
                </p>
                <h3 className="text-2xl font-bold text-[#f8f4ef] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#b9c3cd] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MENU
───────────────────────────────────────────── */
function Menu({ addToCart, setActivePage }) {
  return (
    <div className="bg-[#07111d] text-white pt-32">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Curated Selection" />
        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Our Menu
        </h2>
        <AccentLine />
        <p className="text-[#b9c3cd] text-lg leading-relaxed mt-6">
          A premium selection of signature dishes designed for elegant dining.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {DISHES.map((dish, i) => (
          <div
            key={i}
            className="group rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-[#0d1828] to-[#0a1421] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#f8f4ef] text-[#111827] text-[0.62rem] tracking-[0.18em] uppercase font-bold px-3 py-1.5 rounded-full">
                {dish.tag}
              </div>
            </div>

            <div className="p-6 flex flex-col h-[250px]">
              <h3 className="text-xl font-bold text-[#f8f4ef] mb-2">
                {dish.name}
              </h3>
              <p className="text-[#aeb8c3] text-sm leading-relaxed mb-4 flex-grow">
                {dish.desc}
              </p>

              <div className="flex items-center justify-between mb-4">
                <p className="text-[#d4a373] text-xl font-bold">{dish.price}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => addToCart(dish)}
                  className="flex-1 py-3 rounded-xl bg-white/8 border border-white/10 text-white font-semibold hover:bg-white/12 transition-all"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setActivePage("Contact")}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-semibold hover:scale-[1.02] transition-all"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
function Services({ setActivePage }) {
  return (
    <div className="bg-[#07111d] text-white pt-32">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Premium Offerings" />
        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Our Services
        </h2>
        <AccentLine />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        {SERVICES.map((item, i) => (
          <div
            key={i}
            className="rounded-[2rem] p-9 border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold text-[#f8f4ef] mb-3">
              {item.title}
            </h3>
            <p className="text-[#b9c3cd] leading-relaxed">{item.desc}</p>

            <button
              onClick={() => setActivePage("Contact")}
              className="mt-7 text-[#d4a373] text-sm uppercase tracking-[0.18em] font-semibold"
            >
              Enquire Now →
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Food", "Interior", "Events"];

  const filteredItems =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#07111d] text-white pt-32">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Visual Showcase" />
        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Portfolio
        </h2>
        <AccentLine />
      </section>

      <div className="flex justify-center gap-4 flex-wrap px-6 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-full text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
              filter === f
                ? "bg-[#d4a373] text-[#111827] font-bold"
                : "bg-white/5 border border-white/10 text-[#d3dae2] hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="group rounded-[2rem] overflow-hidden border border-white/10 bg-[#101a2b]"
          >
            <div className="overflow-hidden h-80">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <p className="text-[#d4a373] text-xs uppercase tracking-[0.2em] mb-2 font-bold">
                {item.category}
              </p>
              <h3 className="text-xl font-bold text-[#f8f4ef]">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-[#eef2f7] placeholder-[#9aa6b4] outline-none focus:border-[#d4a373] transition-all duration-300";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="bg-[#07111d] text-white pt-32">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Book Your Visit" />
        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Reservations
        </h2>
        <AccentLine />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-[#f8f4ef] mb-8">
            Reserve Your Experience
          </h3>

          {sent && (
            <div className="mb-6 rounded-2xl border border-[#d4a373]/40 bg-[#d4a373]/10 px-5 py-4 text-[#f0d3b2]">
              Reservation request sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className={inputClass}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <textarea
              rows={5}
              placeholder="Special request..."
              className={`${inputClass} resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all duration-300"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=85"
              alt="Interior"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-bold text-[#f8f4ef] mb-6">
              Contact Details
            </h3>

            <div className="space-y-5 text-[#c2ccd6]">
              <p><span className="text-[#d4a373] font-semibold">Location:</span> Mumbai, Maharashtra</p>
              <p><span className="text-[#d4a373] font-semibold">Phone:</span> +91 22 4001 9999</p>
              <p><span className="text-[#d4a373] font-semibold">Email:</span> reserve@aurum.in</p>
              <p><span className="text-[#d4a373] font-semibold">Hours:</span> 12:00 PM – 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CART
───────────────────────────────────────────── */
function CartSidebar({ cart, setCart, cartOpen, setCartOpen }) {
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0b1220] border-l border-white/10 z-[60] transform transition-transform duration-500 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#f8f4ef]">Your Cart</h3>
        <button
          onClick={() => setCartOpen(false)}
          className="text-white text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="p-6 space-y-5 overflow-y-auto h-[calc(100%-180px)]">
        {cart.length === 0 ? (
          <p className="text-[#aeb8c3]">Your cart is empty.</p>
        ) : (
          cart.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="font-bold text-[#f8f4ef]">{item.name}</h4>
                <p className="text-[#d4a373] font-semibold mt-1">{item.price}</p>
                <button
                  onClick={() => removeItem(i)}
                  className="text-red-400 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0b1220]">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#050c15] border-t border-white/10 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black tracking-[0.24em] text-[#f8f4ef]">
            AURUM <span className="text-[#d4a373]">DINING</span>
          </h3>
          <p className="text-[#9eabb8] mt-5 leading-relaxed max-w-sm">
            A clean, modern and luxury restaurant experience crafted for
            unforgettable dining.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373] mb-5 font-bold">
            Navigation
          </p>
          <div className="space-y-3">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className="block text-[#c3ccd5] hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4a373] mb-5 font-bold">
            Contact
          </p>
          <div className="space-y-3 text-[#c3ccd5]">
            <p>Mumbai, Maharashtra</p>
            <p>+91 22 4001 9999</p>
            <p>reserve@aurum.in</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#8d99a8] text-sm">
          © {new Date().getFullYear()} Aurum Dining. All rights reserved.
        </p>
        <p className="text-[#8d99a8] text-sm">Designed with modern luxury.</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (dish) => {
    setCart((prev) => [...prev, dish]);
    setCartOpen(true);
  };

  const PAGES = {
    Home: (props) => <Home {...props} />,
    About: About,
    Menu: (props) => <Menu {...props} addToCart={addToCart} />,
    Services: (props) => <Services {...props} />,
    Portfolio: Portfolio,
    Contact: Contact,
  };

  const PageComponent = PAGES[activePage];

  return (
    <div className="min-h-screen bg-[#07111d]">
      <Navbar
        activePage={activePage}
        setActivePage={navigate}
        cartCount={cart.length}
        setCartOpen={setCartOpen}
      />

      <CartSidebar
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      <main>
        <PageComponent setActivePage={navigate} />
      </main>

      <Footer setActivePage={navigate} />
    </div>
  );
}
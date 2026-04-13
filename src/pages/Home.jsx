import { useState, useEffect } from "react";

/* ---------------- DATA ---------------- */
const FEATURES = [
  {
    icon: "✦",
    title: "Refined Ingredients",
    desc: "Every ingredient is selected with precision for flavour, freshness and elegance.",
  },
  {
    icon: "✧",
    title: "Curated Experience",
    desc: "Every course, every detail is designed to feel unforgettable.",
  },
  {
    icon: "◈",
    title: "Modern Ambience",
    desc: "A contemporary setting with luxury and calm sophistication.",
  },
  {
    icon: "✺",
    title: "Signature Service",
    desc: "Warm hospitality with a seamless guest experience.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    role: "Food Critic",
    quote:
      "One of the most elegant dining spaces I’ve experienced.",
  },
  {
    name: "Aarav Shah",
    role: "Entrepreneur",
    quote:
      "The ambience and food together create a premium experience.",
  },
  {
    name: "Naina Kapoor",
    role: "Travel Creator",
    quote:
      "A luxury restaurant that feels exclusive yet welcoming.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-7xl font-black text-[#f8f4ef] leading-tight">
              Where <span className="text-[#d4a373]">Taste</span> Meets Art
            </h1>

            <p className="mt-6 text-[#c9d1da] text-lg max-w-xl">
              Experience luxury dining with elegant ambience, curated flavors,
              and unforgettable service.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setActivePage("Contact")}
                className="px-6 py-3 bg-[#d4a373] text-black rounded-full font-semibold"
              >
                Reserve Now
              </button>

              <button
                onClick={() => setActivePage("Menu")}
                className="px-6 py-3 border border-white/20 rounded-full"
              >
                Explore Menu
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 rounded-2xl bg-white/5"
            >
              <div className="text-3xl text-[#d4a373]">{f.icon}</div>
              <h3 className="mt-3 text-xl font-bold">{f.title}</h3>
              <p className="text-[#b9c3cd] mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">What Guests Say</h2>

          <p className="text-xl text-[#e5e7eb]">
            "{TESTIMONIALS[activeTestimonial].quote}"
          </p>

          <p className="mt-4 font-bold">
            {TESTIMONIALS[activeTestimonial].name}
          </p>
          <p className="text-sm text-[#9ca3af]">
            {TESTIMONIALS[activeTestimonial].role}
          </p>
        </div>
      </section>
    </div>
  );
}
import React, { useState, useEffect } from "react";

function Home({ setActivePage }) {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Food Critic",
      quote:
        "One of the most elegant dining experiences I’ve ever had — refined, luxurious and unforgettable.",
    },
    {
      name: "Aarav Shah",
      role: "Entrepreneur",
      quote:
        "The ambience is premium, but the food and service make it truly exceptional.",
    },
    {
      name: "Naina Kapoor",
      role: "Travel Creator",
      quote:
        "A perfect blend of modern luxury and warm hospitality.",
    },
  ];

  const features = [
    {
      icon: "✦",
      title: "Premium Ingredients",
      desc: "Only the finest and freshest ingredients selected for every dish.",
    },
    {
      icon: "✧",
      title: "Curated Experience",
      desc: "Designed to create unforgettable dining memories.",
    },
    {
      icon: "◈",
      title: "Luxury Ambience",
      desc: "Modern interiors with elegant and calming atmosphere.",
    },
    {
      icon: "✺",
      title: "Signature Service",
      desc: "Exceptional hospitality with attention to every detail.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#07111d] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85"
            alt="Restaurant"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#07111d]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
              Boutique Luxury Dining
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Where <br />
              <span className="text-[#d4a373]">Taste</span> Meets Art
            </h1>

            <p className="mt-6 text-[#c9d1da] max-w-lg text-lg">
              A premium restaurant experience crafted with elegance,
              flavour and unforgettable ambience.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button
                onClick={() => setActivePage("Contact")}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-black font-semibold uppercase tracking-[0.15em]"
              >
                Reserve Now
              </button>

              <button
                onClick={() => setActivePage("Menu")}
                className="px-7 py-3 rounded-full border border-white/20 bg-white/5 uppercase tracking-[0.15em]"
              >
                Explore Menu
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85"
              alt="Dining"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="text-[#d4a373] uppercase tracking-[0.3em] text-sm">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-black mt-3">Crafted For Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-2 transition"
            >
              <div className="text-3xl text-[#d4a373] mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#b9c3cd] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-10">
          
          <p className="text-[#d4a373] uppercase tracking-[0.3em] text-sm">
            Guest Reviews
          </p>

          <h2 className="text-4xl font-black mt-3">What Guests Say</h2>

          <p className="text-xl mt-8 text-[#f1ebe3] italic">
            “{testimonials[activeTestimonial].quote}”
          </p>

          <div className="mt-6">
            <p className="font-bold">
              {testimonials[activeTestimonial].name}
            </p>
            <p className="text-sm text-[#9faab6]">
              {testimonials[activeTestimonial].role}
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full ${
                  i === activeTestimonial
                    ? "w-8 bg-[#d4a373]"
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

export default Home;
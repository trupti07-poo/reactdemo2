import React from "react";

function Services({ setActivePage }) {
  const services = [
    {
      icon: "🍽️",
      title: "Fine Dining",
      desc: "An elegant multi-course dining experience crafted with precision and creativity.",
    },
    {
      icon: "🥂",
      title: "Private Events",
      desc: "Exclusive dining spaces for celebrations, anniversaries and special occasions.",
    },
    {
      icon: "🎉",
      title: "Corporate Dining",
      desc: "Premium corporate hosting with refined ambience and curated menus.",
    },
    {
      icon: "📅",
      title: "Reservations",
      desc: "Seamless table booking experience with personalized arrangements.",
    },
  ];

  return (
    <div className="bg-[#07111d] text-white pt-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
          Premium Offerings
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Our Services
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
          <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl mb-5">{item.icon}</div>

            <h3 className="text-2xl font-bold text-[#f8f4ef] mb-3">
              {item.title}
            </h3>

            <p className="text-[#b9c3cd] leading-relaxed mb-6">
              {item.desc}
            </p>

            <button
              onClick={() => setActivePage("Contact")}
              className="text-[#d4a373] uppercase text-sm tracking-[0.15em] font-semibold"
            >
              Enquire Now →
            </button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Services;
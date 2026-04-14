import React, { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Food", "Interior", "Events"];

  const items = [
    {
      category: "Food",
      title: "Signature Table",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    },
    {
      category: "Interior",
      title: "Main Hall",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
    },
    {
      category: "Food",
      title: "Dessert Story",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    },
    {
      category: "Events",
      title: "Private Celebration",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    },
    {
      category: "Interior",
      title: "Wine Lounge",
      img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80",
    },
    {
      category: "Food",
      title: "Chef’s Garden",
      img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=900&q=80",
    },
  ];

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div className="bg-[#07111d] text-white pt-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
          Visual Showcase
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Portfolio
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
          <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap gap-4 px-6 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-[0.15em] transition ${
              filter === f
                ? "bg-[#d4a373] text-black font-semibold"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0d1828]"
          >
            {/* IMAGE */}
            <div className="h-72 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <p className="text-[#d4a373] text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                {item.category}
              </p>

              <h3 className="text-lg font-bold text-[#f8f4ef]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Portfolio;
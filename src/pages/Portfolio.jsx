import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const FILTERS = ["All", "Food", "Interior", "Events"];

  const ITEMS = [
    {
      category: "Food",
      title: "Signature Dish",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
    },
    {
      category: "Interior",
      title: "Main Hall",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900",
    },
    {
      category: "Food",
      title: "Dessert Art",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900",
    },
    {
      category: "Events",
      title: "Private Event",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    },
    {
      category: "Interior",
      title: "Luxury Lounge",
      img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900",
    },
    {
      category: "Food",
      title: "Chef Special",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    },
  ];

  const filteredItems =
    filter === "All"
      ? ITEMS
      : ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* HEADER */}
      <section className="text-center py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-3">
          Our Work
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Portfolio
        </h2>
      </section>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 flex-wrap px-6 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition ${
              filter === f
                ? "bg-[#d4a373] text-black font-bold"
                : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 group"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>

            <div className="p-5">
              <p className="text-[#d4a373] text-xs uppercase mb-1">
                {item.category}
              </p>

              <h3 className="text-lg font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

      </section>

    </div>
  );
}
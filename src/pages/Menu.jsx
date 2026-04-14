import React from "react";

function Menu({ addToCart, setActivePage }) {
  const dishes = [
    {
      name: "Saffron Lobster Bisque",
      desc: "Velvety saffron broth with herb oil and caviar pearls.",
      price: "₹1,850",
      tag: "Chef's Signature",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
    },
    {
      name: "Wagyu Tenderloin A5",
      desc: "Truffle jus with seasonal greens.",
      price: "₹3,450",
      tag: "Most Loved",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=80",
    },
    {
      name: "Black Truffle Risotto",
      desc: "Wild mushrooms with parmesan.",
      price: "₹1,450",
      tag: "Vegetarian",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=80",
    },
    {
      name: "Miso Glazed Sea Bass",
      desc: "Yuzu foam with crisp textures.",
      price: "₹2,150",
      tag: "Seasonal",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80",
    },
    {
      name: "Smoked Lamb Chops",
      desc: "Herb crusted with garlic jus.",
      price: "₹2,650",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80",
    },
    {
      name: "Signature Pasta",
      desc: "Creamy parmesan basil pasta.",
      price: "₹1,250",
      tag: "Classic",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&q=80",
    },
    {
      name: "Royal Dessert Platter",
      desc: "Luxury dessert collection.",
      price: "₹1,150",
      tag: "Sweet",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&q=80",
    },
    {
      name: "Flame Grilled Salmon",
      desc: "Fresh salmon with citrus glaze.",
      price: "₹2,250",
      tag: "Fresh",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80",
    },
  ];

  return (
    <div className="bg-[#07111d] text-white pt-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
          Curated Selection
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Our Menu
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
          <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
        </div>

        <p className="text-[#b9c3cd] mt-6 text-lg">
          A premium selection of handcrafted dishes designed for fine dining.
        </p>
      </section>

      {/* MENU GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {dishes.map((dish, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0d1828] hover:-translate-y-2 transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-bold">
                {dish.tag}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col h-[220px]">
              <h3 className="text-lg font-bold mb-2">{dish.name}</h3>

              <p className="text-sm text-[#b9c3cd] mb-4 flex-grow">
                {dish.desc}
              </p>

              <p className="text-[#d4a373] font-bold text-lg mb-3">
                {dish.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(dish)}
                  className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
                >
                  Add
                </button>

                <button
                  onClick={() => setActivePage("Contact")}
                  className="flex-1 py-2 rounded-lg bg-[#d4a373] text-black text-sm font-semibold"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Menu;
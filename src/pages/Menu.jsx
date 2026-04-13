export default function Menu({ addToCart, setActivePage }) {
  const DISHES = [
    {
      name: "Saffron Lobster Bisque",
      desc: "Velvety saffron broth with herb oil.",
      price: "₹1,850",
      tag: "Chef's Special",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    },
    {
      name: "Wagyu Tenderloin",
      desc: "Premium wagyu with truffle jus.",
      price: "₹3,450",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=900",
    },
    {
      name: "Truffle Risotto",
      desc: "Creamy risotto with mushrooms.",
      price: "₹1,450",
      tag: "Vegetarian",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900",
    },
    {
      name: "Miso Sea Bass",
      desc: "Glazed sea bass with yuzu.",
      price: "₹2,150",
      tag: "Signature",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900",
    },
    {
      name: "Lamb Chops",
      desc: "Herb crusted smoked lamb.",
      price: "₹2,650",
      tag: "Most Loved",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    },
    {
      name: "Creamy Pasta",
      desc: "Classic parmesan pasta.",
      price: "₹1,250",
      tag: "Classic",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
    },
    {
      name: "Dessert Platter",
      desc: "Luxury dessert collection.",
      price: "₹1,150",
      tag: "Sweet",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900",
    },
    {
      name: "Grilled Salmon",
      desc: "Fresh salmon with herbs.",
      price: "₹2,250",
      tag: "Fresh",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900",
    },
  ];

  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* HEADER */}
      <section className="text-center py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-3">
          Our Menu
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Signature Dishes
        </h2>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {DISHES.map((dish, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={dish.img}
                className="w-full h-full object-cover hover:scale-110 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col h-[230px]">

              <h3 className="text-lg font-bold mb-1">
                {dish.name}
              </h3>

              <p className="text-sm text-[#b9c3cd] flex-grow">
                {dish.desc}
              </p>

              <p className="text-[#d4a373] font-bold mt-3">
                {dish.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => addToCart(dish)}
                  className="flex-1 py-2 rounded-xl bg-white/10"
                >
                  Add
                </button>

                <button
                  onClick={() => setActivePage("Contact")}
                  className="flex-1 py-2 rounded-xl bg-[#d4a373] text-black"
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
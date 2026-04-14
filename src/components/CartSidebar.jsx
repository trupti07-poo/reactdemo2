import React from "react";

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
      {/* HEADER */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#f8f4ef]">
          Your Cart
        </h3>
        <button
          onClick={() => setCartOpen(false)}
          className="text-white text-2xl"
        >
          ✕
        </button>
      </div>

      {/* CART ITEMS */}
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
                <h4 className="font-bold text-[#f8f4ef]">
                  {item.name}
                </h4>
                <p className="text-[#d4a373] font-semibold mt-1">
                  {item.price}
                </p>

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

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0b1220]">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
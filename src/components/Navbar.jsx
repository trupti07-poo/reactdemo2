import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   NAV LINKS
───────────────────────────────────────────── */
const NAV_LINKS = [
  "Home",
  "About",
  "Menu",
  "Services",
  "Portfolio",
  "Help",
  "Contact",
];

/* ─────────────────────────────────────────────
   NAVBAR COMPONENT
───────────────────────────────────────────── */
export default function Navbar({
  activePage,
  setActivePage,
  cartCount,
  setCartOpen,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

          {/* LOGO */}
          <button
            onClick={() => setActivePage("Home")}
            className="text-[#f8f4ef] font-black tracking-[0.28em] text-sm md:text-base"
          >
            AURUM <span className="text-[#d4a373]">DINING</span>
          </button>

          {/* DESKTOP MENU */}
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

          {/* RIGHT SIDE */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#eef2f7] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
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
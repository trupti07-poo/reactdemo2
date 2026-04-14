import React from "react";

const NAV_LINKS = [
  "Home",
  "About",
  "Menu",
  "Services",
  "Portfolio",
  "Help",
  "Contact",
];

function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#050c15] border-t border-white/10 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-black tracking-[0.24em] text-[#f8f4ef]">
            AURUM <span className="text-[#d4a373]">DINING</span>
          </h3>
          <p className="text-[#9eabb8] mt-5 leading-relaxed max-w-sm">
            A modern luxury restaurant experience crafted for unforgettable dining.
          </p>
        </div>

        {/* NAVIGATION */}
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

        {/* CONTACT */}
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

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#8d99a8] text-sm">
          © {new Date().getFullYear()} Aurum Dining. All rights reserved.
        </p>
        <p className="text-[#8d99a8] text-sm">
          Designed with modern luxury.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
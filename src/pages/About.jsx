import React from "react";

/* ---------------- COMPONENT ---------------- */
export default function About() {
  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* SECTION 1 - STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">
            Our Story
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef] leading-tight">
            Built With <span className="text-[#d4a373]">Taste</span> & Intention
          </h2>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-6">
            Aurum is designed as a modern luxury dining destination where every 
            detail matters — from ambience and plating to service and storytelling.
          </p>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-4">
            It is not just a restaurant, but an experience crafted to feel elegant, 
            calm, immersive and unforgettable.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80"
          className="rounded-3xl shadow-xl"
        />
      </section>

      {/* SECTION 2 - CHEF */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=80"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">
            Meet Our Chef
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
            Chef <span className="text-[#d4a373]">Adrian</span> Laurent
          </h2>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-6">
            With over 18 years of international culinary experience, Chef Adrian
            blends modern techniques with artistic presentation.
          </p>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-4">
            His philosophy: every dish should feel luxurious, memorable and 
            emotionally connected to the guest experience.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-3xl font-bold">18+</p>
              <p className="text-sm text-[#9faab6]">Years Experience</p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-[#9faab6]">Signature Menus</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - TIMELINE */}
      <section className="py-20 px-6 bg-[#0c1726]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-black">Our Journey</h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[#d4a373] font-bold">2008</p>
            <h3 className="text-xl font-bold">Aurum Opens</h3>
            <p className="text-[#b9c3cd]">
              A boutique fine-dining concept begins.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[#d4a373] font-bold">2013</p>
            <h3 className="text-xl font-bold">Signature Menu</h3>
            <p className="text-[#b9c3cd]">
              First curated tasting experience introduced.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[#d4a373] font-bold">2018</p>
            <h3 className="text-xl font-bold">Redesign</h3>
            <p className="text-[#b9c3cd]">
              Interior upgraded to modern luxury style.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[#d4a373] font-bold">2026</p>
            <h3 className="text-xl font-bold">Brand Refresh</h3>
            <p className="text-[#b9c3cd]">
              Entering a new era of premium dining experience.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
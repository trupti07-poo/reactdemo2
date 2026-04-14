import React from "react";

function About() {
  return (
    <div className="bg-[#07111d] text-white pt-32">
      
      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
            Our Story
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef] leading-[1.02]">
            Built With
            <br />
            <span className="text-[#d4a373]">Taste</span> & Intention
          </h2>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
            <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
          </div>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-8">
            Aurum is designed as a modern luxury dining destination where every
            detail matters — from atmosphere and plating to service and storytelling.
          </p>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-5">
            It is not just a restaurant, but a refined experience crafted to feel
            elegant, immersive and unforgettable.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=85"
            alt="Restaurant interior"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        
        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=85"
            alt="Chef"
            className="w-full h-[540px] object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
            Meet Our Chef
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef] leading-[1.02]">
            Chef
            <br />
            <span className="text-[#d4a373]">Adrian</span> Laurent
          </h2>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
            <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
          </div>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-8">
            With over 18 years of international culinary experience, Chef Adrian
            blends artistic plating with modern techniques and fine-dining excellence.
          </p>

          <p className="text-[#b9c3cd] text-lg leading-relaxed mt-5">
            His philosophy: every dish should feel luxurious, memorable, and
            emotionally connected to the guest.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-[#f8f4ef]">18+</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#9faab6] mt-2">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-[#f8f4ef]">12</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#9faab6] mt-2">
                Signature Menus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 bg-[#0c1726]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-14">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
              Growth Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#f8f4ef]">
              Timeline
            </h2>

            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
              <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2008",
                title: "Aurum Opens",
                desc: "A vision of elevated dining begins.",
              },
              {
                year: "2013",
                title: "Signature Menu",
                desc: "Introduction of curated tasting experiences.",
              },
              {
                year: "2018",
                title: "Interior Redesign",
                desc: "Modern luxury transformation of space.",
              },
              {
                year: "2026",
                title: "Brand Refresh",
                desc: "A new era of elegance and premium service.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] p-7 border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <p className="text-[#d4a373] text-sm uppercase tracking-[0.25em] mb-2 font-bold">
                  {item.year}
                </p>
                <h3 className="text-2xl font-bold text-[#f8f4ef] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#b9c3cd]">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
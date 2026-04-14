import React, { useState } from "react";

function Help() {
  const faqs = [
    { q: "Do I need a reservation?", a: "Yes, reservations are recommended for a seamless experience." },
    { q: "What are your opening hours?", a: "We are open daily from 12:00 PM to 11:00 PM." },
    { q: "Do you have vegetarian options?", a: "Yes, we offer a wide range of vegetarian dishes." },
    { q: "Do you offer home delivery?", a: "Currently, we focus on dine-in premium experiences only." },
    { q: "Can I host private events?", a: "Yes, we offer exclusive private dining and events." },
    { q: "Is parking available?", a: "Yes, valet parking is available for all guests." },
    { q: "Do you accept online payments?", a: "Yes, all major cards and UPI are accepted." },
    { q: "Is there a dress code?", a: "Smart casual or elegant attire is recommended." },
    { q: "Can I customize my food?", a: "Yes, based on availability and chef discretion." },
    { q: "How can I contact support?", a: "You can use our contact page or call directly." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-[#07111d] text-white pt-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
          Support
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Help & FAQ
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
          <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="font-semibold text-lg text-[#f8f4ef]">
              {item.q}
            </h3>

            {activeIndex === index && (
              <p className="text-[#b9c3cd] mt-3 leading-relaxed text-sm">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </section>

    </div>
  );
}
export default Help;
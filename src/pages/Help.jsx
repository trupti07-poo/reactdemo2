import { useState } from "react";

export default function Help() {
  const FAQS = [
    { q: "Do I need a reservation?", a: "Yes, reservations are recommended for a better experience." },
    { q: "What are your opening hours?", a: "We are open from 12:00 PM to 11:00 PM daily." },
    { q: "Do you have vegetarian options?", a: "Yes, we offer a variety of vegetarian dishes." },
    { q: "Do you offer home delivery?", a: "Currently we focus on dine-in experience only." },
    { q: "Can I host private events?", a: "Yes, we provide private dining and event services." },
    { q: "Is parking available?", a: "Yes, valet parking is available for guests." },
    { q: "Do you accept online payments?", a: "Yes, all major payment methods are accepted." },
    { q: "Is there a dress code?", a: "Smart casual attire is recommended." },
    { q: "Can I customize my food?", a: "Yes, based on chef availability." },
    { q: "How can I contact support?", a: "You can use our contact page or call us directly." },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* HEADER */}
      <section className="text-center py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-3">
          Support
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Help & FAQ
        </h2>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-4">

        {FAQS.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="p-5 rounded-2xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="font-semibold text-lg">
              {item.q}
            </h3>

            {active === i && (
              <p className="text-[#b9c3cd] mt-2 text-sm">
                {item.a}
              </p>
            )}
          </div>
        ))}

      </section>

    </div>
  );
}
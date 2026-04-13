import { useEffect } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    icon: "🍽️",
    title: "Fine Dining",
    desc: "An elevated tasting journey designed around seasonal ingredients and elegant plating.",
  },
  {
    icon: "🥂",
    title: "Private Events",
    desc: "Bespoke dining experiences for celebrations, anniversaries and intimate gatherings.",
  },
  {
    icon: "🎉",
    title: "Corporate Dining",
    desc: "Premium event hosting and curated executive dining in a refined environment.",
  },
  {
    icon: "📅",
    title: "Reservations",
    desc: "Simple booking with personalised arrangements for your special evening.",
  },
];

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
───────────────────────────────────────────── */
function SectionTag({ text }) {
  return (
    <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
      {text}
    </p>
  );
}

function AccentLine() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
      <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
      <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SERVICES PAGE
───────────────────────────────────────────── */
export default function Services({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#07111d] text-white pt-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Premium Offerings" />
        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Our Services
        </h2>
        <AccentLine />
        <p className="text-[#b9c3cd] text-lg leading-relaxed mt-6">
          Experience world-class hospitality, curated dining and premium event services.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        {SERVICES.map((item, i) => (
          <div
            key={i}
            className="rounded-[2rem] p-9 border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-5xl mb-6">{item.icon}</div>

            <h3 className="text-2xl font-bold text-[#f8f4ef] mb-3">
              {item.title}
            </h3>

            <p className="text-[#b9c3cd] leading-relaxed">
              {item.desc}
            </p>

            <button
              onClick={() => setActivePage("Contact")}
              className="mt-7 text-[#d4a373] text-sm uppercase tracking-[0.18em] font-semibold hover:tracking-[0.22em] transition-all"
            >
              Enquire Now →
            </button>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h3 className="text-3xl font-bold text-[#f8f4ef] mb-4">
            Plan Your Special Experience
          </h3>
          <p className="text-[#b9c3cd] mb-6">
            Whether it's a celebration or a corporate event, we ensure a premium experience tailored to you.
          </p>

          <button
            onClick={() => setActivePage("Contact")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-semibold uppercase tracking-[0.2em] hover:scale-[1.05] transition-all"
          >
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
}
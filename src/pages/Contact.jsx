import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-[#9aa6b4] outline-none focus:border-[#d4a373]";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 3000);

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#07111d] text-white pt-28">

      {/* HEADER */}
      <section className="text-center py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-3">
          Book Your Visit
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Reservations
        </h2>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Reserve Your Table
          </h3>

          {sent && (
            <div className="mb-5 p-4 rounded-xl bg-[#d4a373]/20 border border-[#d4a373] text-[#f0d3b2]">
              Reservation sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className={inputClass}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className={inputClass}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <textarea
              rows="4"
              placeholder="Special request..."
              className={inputClass}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#d4a373] text-black font-bold"
            >
              Confirm Booking
            </button>

          </form>
        </div>

        {/* INFO */}
        <div className="space-y-6">

          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200"
            className="rounded-3xl"
          />

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Contact Details
            </h3>

            <p className="text-[#c2ccd6] mb-2">
              📍 Mumbai, Maharashtra
            </p>

            <p className="text-[#c2ccd6] mb-2">
              📞 +91 22 4001 9999
            </p>

            <p className="text-[#c2ccd6] mb-2">
              📧 reserve@aurum.in
            </p>

            <p className="text-[#c2ccd6]">
              🕒 12:00 PM – 11:00 PM
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
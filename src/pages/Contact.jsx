import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-[#eef2f7] placeholder-[#9aa6b4] outline-none focus:border-[#d4a373] transition-all duration-300";

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
    <div className="bg-[#07111d] text-white pt-32">
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#d4a373] mb-3 font-semibold">
          Book Your Visit
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#f8f4ef]">
          Reservations
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4a373]" />
          <div className="w-2 h-2 rounded-full bg-[#d4a373]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4a373]" />
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">
        
        {/* FORM */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-[#f8f4ef] mb-8">
            Reserve Your Experience
          </h3>

          {sent && (
            <div className="mb-6 rounded-2xl border border-[#d4a373]/40 bg-[#d4a373]/10 px-5 py-4 text-[#f0d3b2]">
              Reservation request sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
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
              rows={5}
              placeholder="Special request..."
              className={`${inputClass} resize-none`}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#f0c38e] text-[#111827] font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all duration-300"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          
          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=85"
              alt="Restaurant"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-bold text-[#f8f4ef] mb-6">
              Contact Details
            </h3>

            <div className="space-y-5 text-[#c2ccd6]">
              <p>
                <span className="text-[#d4a373] font-semibold">Location:</span>{" "}
                Mumbai, Maharashtra
              </p>
              <p>
                <span className="text-[#d4a373] font-semibold">Phone:</span>{" "}
                +91 22 4001 9999
              </p>
              <p>
                <span className="text-[#d4a373] font-semibold">Email:</span>{" "}
                reserve@aurum.in
              </p>
              <p>
                <span className="text-[#d4a373] font-semibold">Hours:</span>{" "}
                12:00 PM – 11:00 PM
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
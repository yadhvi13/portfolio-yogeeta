import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully ✨", { theme: "dark" });
        form.current.reset();
      } else {
        toast.error("Something went wrong. Try again!", { theme: "dark" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect to server.", { theme: "dark" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-brand-crimson text-brand-cream py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] overflow-hidden"
    >
      <ToastContainer />
      
      {/* Background Glowing Gold Blur */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-brand-cream uppercase">
          LET'S CONNECT
        </h2>
        <div className="w-20 h-[3px] bg-brand-gold mx-auto mt-3 rounded-full" />
      </motion.div>

      {/* Centered Glass Container */}
      <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-12 glass-card-dark shadow-2xl border border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
          
          {/* Left Column: Contact details & editorial prompt */}
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start">
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-gold leading-tight tracking-wide mb-5">
                LET'S BUILD <br />
                SOMETHING <br />
                MEMORABLE.
              </h3>
              <p className="font-sans text-sm sm:text-base text-brand-cream/80 leading-relaxed max-w-xs mb-8">
                Have an idea, project collaboration, or opportunity? My inbox is always open. Let's start a conversation.
              </p>
            </div>

            {/* Info list */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm font-semibold w-full">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-brand-gold text-lg">📧</span>
                <a href="mailto:yogeeta1312@gmail.com" className="hover:text-brand-gold transition-colors cursor-none">yogeeta1312@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-brand-gold text-lg">🔗</span>
                <a href="https://github.com/yadhvi13" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors cursor-none">github.com/yadhvi13</a>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-brand-gold text-lg">📍</span>
                <span className="text-brand-cream/80">Faridabad, Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with translucent inputs */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all cursor-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all cursor-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all cursor-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all cursor-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-2 bg-brand-gold text-brand-dark font-sans font-extrabold rounded-full py-3.5 shadow-lg hover:bg-[#c59f2a] transition-all text-center tracking-widest uppercase cursor-none"
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;



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
      className="relative overflow-hidden py-32 px-4 sm:px-8 md:px-[7vw] lg:px-[20vw] group"
    >
      <ToastContainer />
       <div
  className="pointer-events-none absolute inset-0
  opacity-0 group-hover:opacity-100
  transition-opacity duration-700"
>
      {/* 🌈 FLOATING GLOW ORBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/25 rounded-full blur-[140px]" />
</div>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mt-6 max-w-xl mx-auto text-lg">
          Have an idea, opportunity, or just want to say hi?
          My inbox is always open.
        </p>
      </motion.div>

      {/* 💎 GLASS FORM CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <div
          className="relative rounded-3xl p-8
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_30px_80px_-15px_rgba(239,68,68,0.6)]"
        >
          {/* Animated border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl
    bg-gradient-to-r from-orange-500/30 to-red-500/30
    opacity-0 group-hover:opacity-100
    transition duration-700 blur-xl" />

<div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Send me a message 🚀
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            {["user_email", "user_name", "subject"].map((field, i) => (
              <motion.input
                key={i}
                whileFocus={{ scale: 1.02 }}
                type={field === "user_email" ? "email" : "text"}
                name={field}
                placeholder={
                  field === "user_email"
                    ? "Your Email"
                    : field === "user_name"
                    ? "Your Name"
                    : "Subject"
                }
                required
                className="w-full rounded-xl px-4 py-3 bg-white/5
                border border-white/20 text-white
                focus:outline-none focus:border-orange-400
                focus:bg-white/10 transition"
              />
            ))}

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="rounded-xl px-4 py-3 bg-white/5
              border border-white/20 text-white
              focus:outline-none focus:border-orange-400
              focus:bg-white/10 transition"
            />

            {/* ✨ MAGIC BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
              className="relative overflow-hidden mt-4 rounded-xl py-3
              bg-gradient-to-r from-orange-500 to-red-500
              font-semibold text-white"
            >
              <span className="relative z-10">
                {isSending ? "Sending..." : "Send Message"}
              </span>

              {/* Button shine */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
            </motion.button>
          </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;


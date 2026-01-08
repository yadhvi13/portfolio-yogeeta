// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_axbtt7a",  // Replace with your EmailJS Service ID
//         "template_1ziboq3",  // Replace with your EmailJS Template ID
//         form.current,
//         "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setIsSent(true);
//           form.current.reset(); // Reset form fields after sending
//           toast.success("Message sent successfully! ✅", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         },
//         (error) => {
//           console.error("Error sending message:", error);
//           toast.error("Failed to send message. Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           I’d love to hear from you—reach out for any opportunities or questions!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
          
//           {/* Send Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully ✨", { theme: "dark" });
        },
        () => {
          setIsSending(false);
          toast.error("Something went wrong. Try again!", { theme: "dark" });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] group"
    >
      <ToastContainer />
       <div
  className="pointer-events-none absolute inset-0
  opacity-0 group-hover:opacity-100
  transition-opacity duration-700"
>
      {/* 🌈 FLOATING GLOW ORBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/25 rounded-full blur-[140px]" />
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
          shadow-[0_30px_80px_-15px_rgba(168,85,247,0.6)]"
        >
          {/* Animated border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl
    bg-gradient-to-r from-purple-500/30 to-pink-500/30
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
                focus:outline-none focus:border-purple-400
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
              focus:outline-none focus:border-purple-400
              focus:bg-white/10 transition"
            />

            {/* ✨ MAGIC BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
              className="relative overflow-hidden mt-4 rounded-xl py-3
              bg-gradient-to-r from-purple-600 to-pink-500
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


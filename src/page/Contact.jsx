import React, { useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d7mjw7l",
        "template_pfvngsk",
        form.current,
        "MsMVQn5l7SgodBfqx"
      )
      .then(
        () => {
          toast.success("✅ Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        () => {
          toast.error("❌ Something went wrong. Try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      className="bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-12"
      id="contact"
    >
      <ToastContainer />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
      
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Connect with Me
          </h2>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/sarath-c12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base sm:text-lg hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>

            <a
              href="https://github.com/Sarath8943"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base sm:text-lg hover:text-blue-400 transition"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>

            <a
              href="mailto:sarathshivan99@gmail.com"
              className="flex items-center gap-3 text-base sm:text-lg hover:text-blue-400 transition"
            >
              <FaEnvelope className="text-2xl" /> Email
            </a>

            <a
              href="https://wa.me/918943926520"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base sm:text-lg hover:text-green-400 transition"
            >
              <FaWhatsapp className="text-2xl" /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
            CONTACT
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 text-sm sm:text-base rounded-md bg-[#1e293b] outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 text-sm sm:text-base rounded-md bg-[#1e293b] outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full px-4 py-3 text-sm sm:text-base rounded-md bg-[#1e293b] outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition"
            >
              CONTACT <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

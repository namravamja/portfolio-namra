"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ContactForm = () => {
  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
          },
        },
      }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/50 flex flex-col justify-between transform-gpu transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span>Send a Message</span>
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          📝
        </motion.span>
      </h2>
      <p className="text-slate-600 mb-6">
        Have a question or want to work together? Drop me a message!
      </p>

      <div className="space-y-4">
        <div className="group">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all resize-none"
            placeholder="Your message here..."
            rows={4}
          />
        </div>
      </div>

      <motion.button
        className="mt-6 bg-gradient-to-r from-violet-900/70 to-violet-900/70 text-white font-medium py-3 px-6 rounded-xl hover:bg-violet-200 hover:cursor-pointer flex items-center justify-center gap-2 transition-all"
        whileTap={{ scale: 0.97 }}
      >
        <span>Send Message</span>
        <motion.span
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Icon icon="mdi:send" className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default ContactForm;
